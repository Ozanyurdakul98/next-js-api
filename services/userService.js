import {promises} from 'fs';

export async function getAllUsers() {
  const data = await promises.readFile('db/users.json', 'utf-8');
  return JSON.parse(data);
}

export async function getUserById(id) {
  const data = await promises.readFile('db/users.json', 'utf-8');
  if (JSON.parse(data).find(user => user._id === id)) {
    console.log(
      'data',
      JSON.parse(data).find(user => user._id === id),
    );
    return JSON.parse(data).find(user => user._id === id);
  } else {
    return;
  }
}

export async function createUser(name, gender, email) {
  const data = await promises.readFile('db/users.json', 'utf-8');
  const users = JSON.parse(data);
  const test = JSON.parse(name);
  const newUser = {
    _id: Math.random().toString(36).substring(2),
    name: test.name,
    gender: test.gender,
    email: test.email,
  };
  const newUsers = [...users, newUser];
  await promises.writeFile('db/users.json', JSON.stringify(newUsers, null, 2));
  return {newUser};
}

export async function deleteUser(id) {
  const data = await promises.readFile('db/users.json', 'utf-8');
  const users = JSON.parse(data);

  const deletedUser = users.find(user => user._id === id);
  if (!deletedUser) {
    return {message: `User with id ${id} not found`};
  }

  await promises.writeFile(
    'db/users.json',
    JSON.stringify(
      users.filter(user => user._id !== id),
      null,
      2,
    ),
  );
  return {deletedUser};
}
