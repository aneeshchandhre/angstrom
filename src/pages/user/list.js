
import { useRouter } from 'next/router';
import React from 'react';
import MUIDataTable from "mui-datatables";
import Button from "@mui/material/Button";
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

const UserList = () => {
  
  const router = useRouter();
  const userCreate = ()=> {
  
    router.push('/user/create');
  }

  const handleEditUser = (rowData) => {
    // Logic to handle editing the user with the given rowData
    console.log("Edit user:", rowData);
  };

  const handleDeleteUser = (rowData) => {
    // Logic to handle deleting the user with the given rowData
    console.log("Delete user:", rowData);
  };


  const columns = ["ID", "Name", "Age", "City", "Stated",
  {
    name: "Actions",
    options: {
      customBodyRender: (value, tableMeta) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEditUser(tableMeta.rowData)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDeleteUser(tableMeta.rowData)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  },

];

  const data = [
    [1, "John Doe", 28, "New York", "NY"],
    [2, "Jane Doe", 35, "Chicago", "IL"],
    [2, "Jane Doe", 35, "Chicago", "IL"],
    [2, "Jane Doe", 35, "Chicago", "IL"],
    [2, "Jane Doe", 35, "Chicago", "IL"],
    [2, "Jane Doe", 35, "Chicago", "IL"],
    // Add more data rows as needed
  ];

  // const options = {
  //   filterType: 'checkbox',
  //   selectableRows: 'multiple',
  //   responsive: 'standard',
  // };
  const options = {
    selectableRows: 'none', // Disable left side checkbox
    filter: false, // Disable filter button

    customToolbar: () => {
      return (
        <Button variant="contained" color="primary" onClick={userCreate}>
          Create User
        </Button>
      );
    },

    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleEditUser(selectedRows)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDeleteUser(selectedRows)}
        >
          Delete
        </Button>
      </div>
    ),

    // ... (other options)
  };
  
  
  return (
    <div>
      <Header />
      <div className="container">
        <div className='page_wrapp'>
          <div className='pageHeadingArea'>
              <div className='breadcrumb_wrapp'>
                  <Link href="./masterData">User</Link> <span>Employee List</span>
              </div>
              {/* <h2 className='page_heading'>Employee List</h2> */}
          </div>
          <MUIDataTable title={"Employee List"} data={data} columns={columns} options={options} />
          </div>
      </div>
       <Footer />
    </div>
  );
};

export default UserList;
