import {getUserById} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const {id} = request.query;
    const user = await getUserById(id);
    if (getUserById == true) {
      return response.status(200).json(user);
    }
  }
  response.status(403).json({message: 'Error: user not found.'});
}
