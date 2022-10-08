import {getAllUsers} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const data = await getAllUsers();
    response.data;
    console.log('getting');
    return response.status(200).json(data);
  }

  res.status(403).json({message: 'Error: request method not allowed.'});
}