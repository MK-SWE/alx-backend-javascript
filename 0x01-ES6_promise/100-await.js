import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    result.photo = photo;
    result.user = user;
  } catch (error) {
    result.photo = null;
    result.user = null;
  }
  return result;
}
