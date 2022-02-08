 

const doFetch = async (method, url, data) => {
  try {
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
     if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

function addTodo(value) {
  const callback = async () => {
    try {
      await doFetch(
        "POST",
        ` http://${process.env.REACT_APP_URL}`,
        JSON.stringify({ description: value, completed: false })
      );
     
    } catch (error) {
      console.error(error);
    }
  };
  callback();
}

function deleteTask(id) {
  doFetch("POST", ` http://${process.env.REACT_APP_URL}/delete`, id);
}

function completedTask(id, checked) {
  doFetch(
    "POST",
    `http://${process.env.REACT_APP_URL}/checked`,
    JSON.stringify({ id, checked: !checked })
  );
}

function completedAllTasks(checked) {
  doFetch(
    "POST",
    `http://${process.env.REACT_APP_URL}/completed`,
    JSON.stringify({ checked: checked })
  );
}

function deleteAllTasks() {
  doFetch("POST", `http://${process.env.REACT_APP_URL}/deleteAllCompleted`);
}
function editTask(value, id) {
  doFetch(
    "POST",
    `http://${process.env.REACT_APP_URL}/edit`,
    JSON.stringify({ description: value, id })
  );
}

const getTodos = async () => {
  try {
    const result = await doFetch("GET", `http://${process.env.REACT_APP_URL}`);

    return result;
  } catch (error) {
    console.error(error);
  }
};
export {
  getTodos,
  addTodo,
  deleteTask,
  completedTask,
  completedAllTasks,
  deleteAllTasks,
  editTask,
};
