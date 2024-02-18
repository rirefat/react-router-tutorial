import { createContact } from "../contacts";

export async function createContactAction() {
    const contact = await createContact();
    return { contact };
  }