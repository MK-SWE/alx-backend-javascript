import signUpUser from "./4-user-promise";
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName)
  return Promise.allSettled([user, photo]).then((values) =>{
    const res = [];
    values.forEach((val) => {
      if (val.status === 'fulfilled') {
        res.push({ status: val.status, value: val.value });
      } else {
        res.push({ status: val.status, value: `${val.reason}` });
      }
      return res;
    })
  })
}
