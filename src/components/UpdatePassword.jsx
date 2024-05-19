import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { updateUserPassword } from '../actions/userActions';
import { CLEAR_ERRORS, CLEAR_MESSAGE } from '../constants/userConstants';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, loading, message } = useSelector((state) => state.updateUser);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUserPassword(oldPassword, newPassword));
        navigate('/')
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: CLEAR_ERRORS });
        }

        if (message) {
            alert.success(message);
            dispatch({ type: CLEAR_MESSAGE });
        }
    }, [dispatch, error, alert, message]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
                onSubmit={submitHandler}
            >
                <h3 className="text-3xl mb-6 text-center">Social App</h3>

                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Old Password"
                        required
                        value={oldPassword}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="New Password"
                        required
                        value={newPassword}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                    Change Password
                </button>
            </form>
        </div>
    );
};

export default UpdatePassword;
