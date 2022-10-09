import {getUserById} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const {id} = request.query;
    const user = await getUserById(id);
    console.log('user', user);
    if (user) {
      return response.status(200).json(user);
    } else {
      return response
        .status(403)
        .json({message: 'Error: user not found .. wrong ID.'});
    }
  }
}
