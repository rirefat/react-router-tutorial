import localforage from "localforage";
import { getContacts } from "../contacts";

export async function getContactsLoader() {
  // For clearing previous data
  // localforage.clear();
  const contacts = await getContacts();
  return { contacts };
}