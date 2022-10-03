const url = "http://localhost:8080/user"


export async function login(email1, pass1) {

    let data = {email: email1, password: pass1}

    const response = await fetch(url+'/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   'Accept': 'text/plain'

        }, 
        body: JSON.stringify(data)
      });
      return response;
}

export async function register(email1, pass1) {
    let data = {email: email1, password: pass1}

    const response = await fetch(url+'/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   'Accept': 'text/plain'
        }, 
        body: JSON.stringify(data)
      });
      return response;
}