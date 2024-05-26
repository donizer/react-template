import { Button } from "@components/Button";

import { useAppDispatch, useAppSelector } from "./redux";
import { decrementId, incrementId } from "./redux/slices/user";

export function App() {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.user.id);

  const handleIncrementId = () => dispatch(incrementId());
  const handleDecrementId = () => dispatch(decrementId());

  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <div className="grid h-80 w-80 items-center justify-center">
        <h1 className="text-center text-4xl">Hello User {id}</h1>

        <div className="flex justify-center gap-4">
          <Button onClick={handleIncrementId}>increment Id</Button>
          <Button onClick={handleDecrementId}> decrement Id</Button>
        </div>
      </div>
    </div>
  );
}
