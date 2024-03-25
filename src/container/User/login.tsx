import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'; 
import toast from 'react-hot-toast';
import { login } from '@/services';

interface FormValues {
    email: string;
    password: string;
}

export const UserLogin: React.FC = () => {
    const  navigate = useNavigate();  

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void; }) => {
        try {
            const response = await login(values.email, values.password);
            
            console.log(response); 
            resetForm(); 
            toast.success('Login successful!', {
                duration: 4000,
                position: 'top-center',
            });
            navigate('/');  
        } catch (error:any) {
            console.error('Error:', error);
            toast.error(error.message || 'Error occurred. Please try again later.', {
                duration: 4000,
                position: 'top-center',
            });
        } finally {
            setSubmitting(false); 
        }
    };

    return (
        <div className="flex justify-center items-center h-[83vh] ">
            <div className="bg-gray-100 mx-2 px-4 p-3 md:p-8 w-[380px] rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb2 md:mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <Field type="email" id="email" name="email" className="form-input focus:border outline-none border-purple-500 py-2 px-4 rounded-xl my-1 w-full placeholder-[#b5b5b5] text-sm" />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                            </div>

                            <div className="mb2 md:mb-4">
                                <label htmlFor="password" className="block text-gray-700">Password</label>
                                <Field type="password" id="password" name="password" className="form-input focus:border outline-none border-purple-500 py-2 px-4 rounded-xl my-1 w-full placeholder-[#b5b5b5] text-sm" />
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                            </div>
                            <div className='flex justify-center'> 

                            <button type="submit" className="bg-blue-500 text-white px-5 md:px-6 py-1.5 md:py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                            </div>
                            <div className='flex justify-center gap-1 pt-2'>
                                <span>Don’t have an account? </span>
                                <Link to="/signup" className="text-blue-500">SignUp</Link>
                            </div>
                            
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
