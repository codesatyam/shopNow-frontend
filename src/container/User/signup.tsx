import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { signup } from '@/services';

interface FormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignUp: React.FC = () => {
    const navigate=useNavigate();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm password is required'),
    });

   
    const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void; }) => {
        try {
            const response = await signup(values.name, values.email, values.password);
            console.log(response); 
            resetForm(); 
            toast.success('Signup successful! Please login.', {
                duration: 4000,
                position: 'top-center',
            });
            navigate("/login")
        } catch (error:any) {
            console.error('Error:', error);
            toast.error(error.message, {
                duration: 4000,
                position: 'top-center',
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[83vh]">
            <div className="bg-gray-100 mx-2 p-2 md:px-8 py-2 w-[380px] rounded shadow-md">
                <h1 className="text-2xl font-bold mb-2 text-center">Sign Up</h1>
                <Formik
                    initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-2">
                                <label htmlFor="name" className="block text-gray-700">Name</label>
                                <Field type="text" id="name" name="name" className="form-input focus:border outline-none border-purple-500 py-1.5 px-4 rounded-xl my-1 w-full placeholder-[#b5b5b5] text-sm" />
                                <ErrorMessage name="name" component="div" className="text-red-500" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <Field type="email" id="email" name="email" className="form-input focus:border outline-none border-purple-500 py-1.5 px-4 rounded-xl my-1 w-full placeholder-[#b5b5b5] text-sm" />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="password" className="block text-gray-700">Password</label>
                                <Field type="password" id="password" name="password" className="form-input focus:border outline-none border-purple-500 py-1.5 px-4 rounded-xl my-1 w-full placeholder-[#b5b5b5] text-sm" />
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                                <Field type="password" id="confirmPassword" name="confirmPassword" className="form-input focus:border outline-none border-purple-500 py-1.5 px-4 rounded-xl my-1 w-full placeholder-[#b5b5b5] text-sm" />
                                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                            </div>
                            <div className='flex justify-center'> 

                            <button type="submit" className="bg-blue-500 text-white px-5 md:px-6 py-1.5 rounded disabled:bg-gray-400 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Signing up...' : 'Sign Up'}
                            </button>
                            </div>
                            <div className='flex justify-center gap-1 pt-2'>
                                <span>Already have an account? </span>
                                <Link to="/login" className="text-blue-500">Login</Link>
                            </div>
                            
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};
