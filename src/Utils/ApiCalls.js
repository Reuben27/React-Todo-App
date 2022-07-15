import { useState, useEffect } from "react";

export const GetData = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if(!res.ok){
          throw Error('The data could not be fetched');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  return {data, isPending, error};
};

export const PostData = (url, data) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetch(url,{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then(() => {
      setIsPending(false);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setIsPending(false);
    });
  }, [data, url]);

  return {isPending, error};
};

export const EditData = (url, data) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetch(url,{
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then(() => {
      setIsPending(false);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setIsPending(false);
    });
  }, [data, url]);

  return {isPending, error};
};

export const DeleteData = (url, recyclebinurl, data) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetch(recyclebinurl,{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then(() => {
      fetch(url, {
        method: 'DELETE',
      }).then(() => {
        setIsPending(false);
        setError(null);
      });
    })   
    .catch((err) => {
      setError(err.message);
      setIsPending(false);
    });
  }, [data, recyclebinurl, url]);

  return {isPending, error};
};

export const PermanentDeleteData = (recyclebinurl) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetch(recyclebinurl, {
      method: 'DELETE',
    }).then(() => {
      setIsPending(false);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setIsPending(false);
    });
  }, [recyclebinurl]);

  return {isPending, error};
};