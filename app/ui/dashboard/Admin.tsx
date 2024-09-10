import { useEffect, useState } from 'react';
import { getUser, deleteUserById, updateUserById } from '../../services/Users';
import Menu from './Menu';

export default function Admin() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const fetchedUsers = await getUser();
        setUsers(fetchedUsers);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch users. Please try again later.');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSave = async (e, userId) => {
    e.preventDefault();
    const updatedUser = {
      name: e.target.name.value,
      firstname: e.target.firstname.value,
      // email: e.target.email.value,
      // role_id: e.target.role_id.value,
    };
    try {
      await updateUserById(userId, updatedUser);
      setEditingUserId(null);
      setUsers(users.map((user) => (user.id === userId ? { ...user, ...updatedUser } : user)));
    } catch (error) {
      console.error(error);
      setError('Failed to update user. Please try again later.');
    }
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUserById(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error(error);
      setError('Failed to delete user. Please try again later.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="w-full min-h-screen p-8">
        <Menu />
        <h3 className="font-bold text-2xl mb-6 mt-6 text-center">Users</h3>
        <div className="flex flex-wrap justify-center">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex flex-col m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm"
            >
              <div
                className={`w-full bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-lg flex flex-col ${
                  editingUserId === user.id ? 'h-[350px]' : 'h-auto'
                }`}
              >
                <div className="p-4 flex-grow flex flex-col overflow-hidden">
                  <div
                    className={`${editingUserId === user.id ? 'flex-grow overflow-y-auto' : ''} mb-4`}
                  >
                    {editingUserId === user.id ? (
                      <form
                        id={`edit-form-${user.id}`}
                        onSubmit={(e) => handleSave(e, user.id)}
                        className="flex flex-col items-center"
                      >
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                          type="text"
                          name="name"
                          defaultValue={user.name}
                        />
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                          type="text"
                          name="firstname"
                          defaultValue={user.firstname}
                        />
                        {/* <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                          type="text"
                          name="email"
                          defaultValue={user.email}
                        />
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                          type="text"
                          name="role_id"
                          defaultValue={user.role_id}
                        /> */}
                      </form>
                    ) : (
                      <>
                        <p>
                          <strong>Nom:</strong> {user.name}
                        </p>
                        <p>
                          <strong>Prénom:</strong> {user.firstname}
                        </p>
                        {/* <p>
                          <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                          <strong>Rôle:</strong> {user.role_id}
                        </p> */}
                      </>
                    )}
                  </div>

                  <div className="flex justify-between mt-auto">
                    {editingUserId === user.id ? (
                      <button
                        type="submit"
                        form={`edit-form-${user.id}`}
                        className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out text-base font-caveat"
                      >
                        Enregistrer
                      </button>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setEditingUserId(editingUserId === user.id ? null : user.id)}
                      className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out text-base font-caveat"
                    >
                      {editingUserId === user.id ? 'Annuler' : 'Modifier'}
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(user.id)}
                    className="bg-secondary-color text-white mt-4 px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out text-base font-caveat"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
