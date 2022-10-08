import {getUserById} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const {id} = request.query;
    const data = await getUserById(id);
    return response.status(200).json(data);
  }
  response.status(403).json({message: 'Error: request method not allowed.'});
}
