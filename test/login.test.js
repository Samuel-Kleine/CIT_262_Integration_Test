import assert from 'assert';
import login from '../utils/login.mjs';

it("Login API should return a valid login token",async ()=>{

    const loginToken= await login({userName:"youwhat@fakemail.com", password: "P@$$w3rd"});

    assert.equal(loginToken.length,36);

})
