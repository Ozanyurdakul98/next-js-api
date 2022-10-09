import {createUser, getAllUsers} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const data = await getAllUsers();
    return response.status(200).json(data);
  }
  if (request.method === 'POST') {
    const data = await createUser(request.body);
    return response.status(200).json(data);
  }
  response.status(403).json({message: 'Error: request method not allowed.'});
}
