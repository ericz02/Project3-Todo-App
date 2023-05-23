import supabase from "./supabase";

const getUserBySlug = async (slug) => {
  const { data, error } = await supabase
    .from("profile")
    .select("user_id")
    .eq("slug", slug)
    .limit(1)
    .single();
  if (error) {
    return {
      success: false,
      error,
    };
  }

  return {
    success: true,
    data,
  };
};

const addNewTodos = async (user_id, body) => {
  const addResponse = await supabase.from("Todo").insert({
    body,
    user_id,
  });
  if (addResponse.error) {
    return {
      success: false,
      error: addResponse.error,
    };
  }

  return {
    success: true,
    message: "added",
    data: addResponse.data,
  };
};

// const getTodoAndUserName = async (userId) => {
//   const { data, error } = await supabase
//     .from('Todo')
//     .select('body, profile:name') 
//     .eq('user_id', userId)

//   if (error) {
//       console.error('Error fetching todo and user name:', error);
//   }

//   return data;
// }
const getTodos = async (userId) => {
  const { data: Todo, error } = await supabase.from("Todo").select("body");
  if (error) {
    console.error("Error fetching todos:", error);
  
    return [];
  }

  return Todo;
};

const getCurrentUser = async () => {
  // debugger;
  const session = await supabase.auth.getSession();
  console.log(session);
  if (session?.data?.session?.user) {
    const { data: bargeMeta, error } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.data.session.user.id)
      .single();

    if (error) {
      return {
        success: false,
        error,
      };
    }

    const user = {
      ...session.data.session.user,
    };

    return {
      success: true,
      data: user,
    };
  }
  return {
    success: true,
    data: null,
  };
};
/**
 * Log in a user
 * @param {*} email
 * @param {*} password
 * @returns plain old javascript object with success, message and optionally, the rest of the addMetaResponse.data object
 *
 * NOTE, it previously responded with error as the name of the key, it was renamed to message
 * for consistency
 */
const loginUser = async (email, password) => {
  const authResponse = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authResponse.error) {
    return {
      success: false,
      error: authResponse.error,
    };
  }

  if (authResponse.data.user) {
    const meta = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", authResponse.data.user.id);

    if (meta.error) {
      return {
        success: false,
        error: meta.error,
      };
    }
    return {
      ...authResponse,
      meta,
      message: "Successfully logged in, please wait to be redirected",
      success: true,
    };
  }

  return {
    success: false,
    error: {
      message: "An unknown error has occurred",
    },
  };
};

const getLatestUsers = async (num = 5) => {
  const { data, error } = await supabase
    .from("profile")
    .select("name, slug")
    .order("created_at", { ascending: false })
    .limit(num);

  if (error) {
    return {
      success: false,
      error,
    };
  }

  return {
    success: true,
    data,
  };
};
// register a user//
/**
 * Register a user by passing in an email, password, name and slug
 * @param {*} email
 * @param {*} password
 * @param {*} name
 * @param {*} slug
 * @returns plain old javascript object with success, message and optionally, the rest of the addMetaResponse.data object
 */
const registerUser = async (email, password, name, slug) => {
  const { data: registerData, error: registerError } = await supabase
    .from("profile")
    .select("*")
    .eq("slug", slug);
  if (registerError) {
    return {
      success: false,
      message: error.message,
    };
  }
  if (registerData.length > 0) {
    return {
      success: false,
      error: registerError,
    };
  }

  const authResponse = await supabase.auth.signUp({
    email,
    password,
  });

  if (authResponse.error) {
    return {
      success: false,
      error: authResponse.error,
    };
  }

  if (authResponse.data.user) {
    const addMetaResponse = await supabase
      .from("profile")
      .insert([{ user_id: authResponse.data.user.id, name, slug }]);

    if (addMetaResponse.error) {
      return {
        success: false,
        error: addMetaResponse.error,
      };
    }
    return {
      success: true,
      message:
        "Registration successful, please wait a few moments to be taken to the login page",
      ...addMetaResponse.data,
    };
  }

  return {
    success: false,
    error: {
      message: "An unknown error has occurred",
    },
  };
};
const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  return { success: !error, error };
};

export {
  registerUser,
  loginUser,
  getCurrentUser,
  getLatestUsers,
  getUserBySlug,
  addNewTodos,
  getTodos,
  logoutUser,
};
