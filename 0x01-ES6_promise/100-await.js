import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  const result = {};
  if (photo instanceof Error || user instanceof Error) {
    result.photo = null;
    result.user = null;
  } else {
    result.photo = photo;
    result.user = user;
  }

  return result;
}
