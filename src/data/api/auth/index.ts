import { User } from "../models";
import { DB, createOne, updateOne } from "../functions";

export const getUser = async (id: string): Promise<User> => {
  const user = await DB.collection("user").getOne(id);
  return user as unknown as User;
};
// auth with password
interface authResponseSuccess {
  token: string;
  record: User;
}
interface authResponseFail {
  code: number;
  message: string;
  data: {
    identity: {
      code: string;
      message: string;
    };
  };
}
export const auth = async (
  email: string,
  password: string
): Promise<authResponseSuccess | authResponseFail> => {
  const user = (await DB.collection("users").authWithPassword(
    `${email}`,
    `${password}`
  )) as unknown as authResponseSuccess;

  if (!user) {
    return {
      code: 400,
      message: "Invalid credentials",
      data: {
        identity: {
          code: "invalid",
          message: "Invalid credentials",
        },
      },
    };
  } else {
    return {
      token: user.token,
      record: user.record,
    };
  }
};

export interface createUserRequest {
  username: string;
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
  name: string;
  role: string;
}
interface createUserResponseSuccess {
  user: User;
}
interface createUserResponseFail {
  code: number;
  message: string;
  data: {};
}

export const createUser = async (
  data: createUserRequest
): Promise<createUserResponseSuccess | createUserResponseFail> => {
  const user = (await createOne(
    data,
    "users"
  )) as unknown as createUserResponseSuccess;
  if (!user) {
    return {
      code: 400,
      message: "Invalid credentials",
      data: {},
    };
  }
  return {
    user: user.user,
  };
};

// update user
interface updateUserRequest {
  id: string;
  username: string;
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
  oldPassword: string;
  name: string;
  role: string;
}

interface updateUserResponseSuccess {
  user: User;
}
interface updateUserResponseFail {
  code: number;
  message: string;
  data: {};
}

export const updateUser = async (
  data: updateUserRequest
): Promise<updateUserResponseSuccess | updateUserResponseFail> => {
  const user = (await updateOne(
    data.id,
    data,
    "user"
  )) as unknown as updateUserResponseSuccess;
  if (!user) {
    return {    
        code: 400,
        message: "Invalid credentials",
        data: data,
    };
  }
  return {
    user: user.user,
  };
};

