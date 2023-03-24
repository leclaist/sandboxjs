// i have no idea where this stuff goes but its for updating dynamodb?
import { API } from "aws-amplify";
import { createUser } from './graphql/mutations';

const newUser = await API.graphql({
    query: createUser,
    variables: {
        input: {
		"email": "Lorem ipsum dolor sit amet"
	}
    }
});

const updatedUser = await API.graphql({
    query: updateUser,
    variables: {
        input: {
		"email": "Lorem ipsum dolor sit amet"
	}
    }
});

const deletedUser = await API.graphql({
    query: deleteUser,
    variables: {
        input: {
            id: "YOUR_RECORD_ID"
        }
    }
});

// List all items
const allUsers = await API.graphql({
    query: listUsers
});
console.log(allUser);

// Get a specific item
const oneUser = await API.graphql({
    query: getUser,
    variables: { id: 'YOUR_RECORD_ID' }
});