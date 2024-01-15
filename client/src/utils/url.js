const BASE_URL = "http://localhost:3000";
export const FIND_USER_URL = BASE_URL + "/api";
export const FIND_ALL_USERS_URL = BASE_URL + "/api/getAllUsers";

// router.get("/", getRandomUser);
router.get("/getAllUsers", getAllUsers);
// router.post("/", updateUser);
// router.post("/createUser", createUser);
