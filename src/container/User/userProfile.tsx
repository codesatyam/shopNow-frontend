import { ChangeEvent, SetStateAction, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
export const UserProfile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [mobileNumber, setMobileNumber] = useState('123-456-7890');
  const [address, setAddress] = useState({
    village: 'Sample Village',
    post: 'Sample Post',
    city: 'Sample City',
    district: 'Sample District',
    state: 'Sample State',
    pin:'123443'
  });
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleMobileNumberChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setMobileNumber(e.target.value);
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setAddress({ ...address, [field]: e.target.value });
  };

  const toggleEditAddress = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const saveAddress = () => {
    // Implement save address logic here
    toggleEditAddress(); // Close edit mode after saving
  };

  return (
    <div className="flex min-h-[83vh] bg-slate-100">
      {/* Sidebar */}
      <div className="w-1/5">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl rounded-none shadow-blue-gray-900/5">
      <List>
      <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* User Profile */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">User Profile</h1>
          <div className="flex items-center mb-4">
           
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Name:</label>
              <input type="text" id="name" value={name} onChange={handleNameChange} className="border border-gray-300 rounded px-3 py-1 mb-2 focus:outline-none focus:border-blue-500" disabled/>
            </div>
          </div>
          <div className="flex items-center mb-4">
            
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} className="border border-gray-300 rounded px-3 py-1 mb-2 focus:outline-none focus:border-blue-500" disabled />
            </div>
          </div>
          <div className="flex items-center mb-4">
            
            <div>
              <label htmlFor="mobileNumber" className="block font-semibold mb-1">Mobile Number:</label>
              <input type="text" id="mobileNumber" value={mobileNumber} onChange={handleMobileNumberChange} className="border border-gray-300 rounded px-3 py-1 mb-2 focus:outline-none focus:border-blue-500" disabled/>
            </div>
          </div>
          <div className="flex items-center mb-4">
          <div>
            <div className='flex justify-between'> 
              <label className="block font-semibold mb-2">Address:</label>
              <button onClick={toggleEditAddress} className="text-blue-500 hover:underline"><FiEdit className="inline-block mr-1" />Edit</button>
              </div>
              {isEditingAddress ? (
                <div>
                  <AddressInput label="Village/Area" value={address.village} onChange={(e) => handleAddressChange(e, 'village')} />
                  <AddressInput label="Post" value={address.post} onChange={(e) => handleAddressChange(e, 'post')} />
                  <AddressInput label="City" value={address.city} onChange={(e) => handleAddressChange(e, 'city')} />
                  <AddressInput label="District" value={address.district} onChange={(e) => handleAddressChange(e, 'district')} />
                  <AddressInput label="State" value={address.state} onChange={(e) => handleAddressChange(e, 'state')} />
                  <AddressInput label="Pin" value={address.pin} onChange={(e) => handleAddressChange(e, 'pin')} />
                  <button onClick={saveAddress} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mt-2">Save</button>
                </div>
              ) : (
                <div className='flex flex-wrap gap-4'>
                  <span className='flex gap-2'> <span className='font-semibold'>Village:</span> <span> {address.village}</span></span>
                  <span  className='flex gap-2'> <span className='font-semibold'>Post:</span> <span>{address.post}</span></span>
                  <span className='flex gap-2'> <span className='font-semibold'>City:</span> <span>{address.city}</span></span>
                  <span className='flex gap-2'> <span className='font-semibold'>District:</span> <span>{address.district}</span></span>
                  <span className='flex gap-2'> <span className='font-semibold'>State:</span> <span>{address.state}</span></span>
                  <span className='flex gap-2'> <span className='font-semibold'>PIN:</span> <span>{address.pin}</span></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const AddressInput = ({ label, value, onChange }: { label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <div className="mb-2">
            <label className="block font-semibold mb-1">{label}:</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                className="border border-gray-300 rounded px-3 py-1 mb-2 focus:outline-none focus:border-blue-500"
            />
        </div>
    );
};
