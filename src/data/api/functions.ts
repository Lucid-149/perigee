import PocketBase from "pocketbase";
import { List } from "./models";

export const DB = new PocketBase("https://harambee-apps.fly.dev");

export interface ListQueryParams {
  page?: number;
  perPage?: number;
  sort?: string;
  filter?: string;
  expand?: string;
  batch?: number;
}

type ResponseType = 400 | 403 | 404;

export interface ErrorResponse {
  code: ResponseType;
  message: string;
  data: any;
}

export const getFullList = async (
  params: ListQueryParams | undefined,
  collectionName: string
): Promise<ErrorResponse | List> => {
  try {
    const response = (await DB.collection(collectionName).getFullList(
  params? params.page : undefined,
    )) as unknown as ErrorResponse | List;
    if (response) {
      if ((response as ErrorResponse).code) {
        return response as ErrorResponse;
      } else {
        return response as List;
      }
    } else {
      throw new Error("Unknown error");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

export const search = async (
  params: ListQueryParams,
  collectionName: string
): Promise<ErrorResponse | List> => {
  try {
    const response = (await DB.collection(collectionName).getList(
      params.page,
      params.perPage,
      {
        sort: params.sort,
        filter: params.filter,
        expand: params.expand,
      }
    )) as unknown as ErrorResponse | List;
    if (response) {
      if ((response as ErrorResponse).code) {
        return response as ErrorResponse;
      } else {
        return response as List;
      }
    } else {
      throw new Error("Unknown error");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getOne = async (
  id: string,
  collectionName: string
): Promise<ErrorResponse | object> => {
  try {
    const response = (await DB.collection(collectionName).getOne(
      id
    )) as unknown as ErrorResponse | object;
    if (response) {
      if ((response as ErrorResponse).code) {
        return response as ErrorResponse;
      } else {
        return response as object;
      }
    } else {
      throw new Error("Unknown error");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

export const createOne = async (
  data: object,
  collectionName: string
): Promise<ErrorResponse | object> => {
  console.log('createOne called')
  try {
    const response = (await DB.collection(collectionName).create(
      data,{ '$autoCancel': false }
    )) as unknown as ErrorResponse | object;
    if (response) {
      if ((response as ErrorResponse).code) {
        return response as ErrorResponse;
        console.log('createOne error')
      } else {
        return response as object;
        console.log('createOne success')
      }
    } else {
      throw new Error("Unknown error");
      console.log('createOne unknown error')
    }
  } catch (error) {
    throw new Error(error as string);
    console.log('createOne error', error)
  }
  console.log('createOne end')
};

export const updateOne = async (
  id: string,
  data: object,
  collectionName: string
): Promise<ErrorResponse | object> => {
  try {
    const response = (await DB.collection(collectionName).update(
      id,
      data
    )) as unknown as ErrorResponse | object;
    if (response) {
      if ((response as ErrorResponse).code) {
        return response as ErrorResponse;
      } else {
        return response as object;
      }
    } else {
      throw new Error("Unknown error");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

export const deleteOne = async (
  id: string,
  collectionName: string
): Promise<ErrorResponse | null> => {
  try {
    const response = (await DB.collection(collectionName).delete(
      id
    )) as unknown as ErrorResponse | object;
    if (response) {
      if ((response as ErrorResponse).code) {
        return response as ErrorResponse;
      } else {
        return null;
      }
    } else {
      throw new Error("Unknown error");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

// realtime functions
interface RealtimeEventDataFormat {
  action: "create" | "update" | "delete";
  data: object;
}
export const subscribe = async (
  collectionName: string,
  callback: (data: any) => void
): Promise<RealtimeEventDataFormat> => {
  try {
    const response = (await DB.collection(collectionName).subscribe(
      "*",
      callback
    )) as unknown as () => void;
    if (response) {
      return response as unknown as RealtimeEventDataFormat;
    } else {
      throw new Error("Unknown error");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};
