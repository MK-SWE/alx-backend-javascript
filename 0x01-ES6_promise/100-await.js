import { uploadPhoto, createUser } from './utils.js'

export default async function asyncUploadUser() {
  const photo = await uploadPhoto()
  const user = await createUser()

  const result = {}
  if (photo instanceof Error) {
    result['photo'] = null;
  } else {
    result['photo'] = photo;
  }

  if (user instanceof Error) {
    result['user'] = null;
  } else {
    result['user'] = user;
  }
  return result;
}
