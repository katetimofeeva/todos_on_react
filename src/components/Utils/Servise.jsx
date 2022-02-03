const postTodo = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  return await res.json();
};

const getResource = async (url) => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  return await res.json();
};

const putMethod = async (url, data) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: data,
  });
  return await res.json();
};

const deleteTask = async (url, id) => {
  const res = await fetch(url, {
    method: "DELETE",
    // headers: {"Id": id}
    body: id,
  });
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  return await res.json();
};

export { postTodo, getResource, putMethod, deleteTask  };
