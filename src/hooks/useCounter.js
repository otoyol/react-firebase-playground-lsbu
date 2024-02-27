import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";

import { firebaseDatabase } from "../utils/firebase";

const useCounter = () => {
  const counterReference = doc(firebaseDatabase, "counter", "global");

  const [counterValue, setCounterValue] = useState(0);

  const [loading, setLoading] = useState(true);

  const updateCounterValue = async (value) => {
    await setDoc(counterReference, { data: value });
    setCounterValue(value);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(counterReference, (doc) => {
      const counterData = doc.data();

      if (counterData) {
        setCounterValue(doc.data().data);
      }

      setLoading(false);
    });

    getDoc(counterReference)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setCounterValue(docSnap.data().data);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => unsubscribe();
  }, [counterReference]);

  return { counterValue, loading, updateCounterValue };
};

export default useCounter;