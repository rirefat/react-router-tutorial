import localforage from "localforage";
import { getContact, getContacts } from "../contacts";

export async function getContactsLoader({request}) {
  // For clearing previous data
  // localforage.clear();

  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts };
}

export async function getContactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}