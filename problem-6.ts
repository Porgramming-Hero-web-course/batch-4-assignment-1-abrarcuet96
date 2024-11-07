{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  interface Partial {
    name?: string;
    age?: number;
    email?: string;
  }

  const updateProfile = (
    mainProfile: Profile,
    updatingValue: Partial
  ): Profile => {
    const [updatingkey] = Object.keys(updatingValue);
    const [updatedValue] = Object.values(updatingValue);
    const updatedProfile = { ...mainProfile, [updatingkey]: updatedValue };
    return updatedProfile;
  };
  // Sample Input :
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
}
