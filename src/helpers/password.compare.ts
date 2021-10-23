import { compare } from 'bcrypt';

export async function comparePassword(
  plainString: string,
  hashString: string,
): Promise<boolean> {
  const match = await compare(plainString, hashString);
  return match;
}
