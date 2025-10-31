import { api } from "@/app/lib/api-client";
import type { User } from "../types";
import { ENDPOINT } from "@/app/config/api-config";

// 💤 Utility for simulate network delay
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUsers = async (): Promise<User[]> => {
  try {
    await sleep(500); // Simulate network delay
    const { data } = await api.get(ENDPOINT.USERS);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
