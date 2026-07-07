import { Outlet } from 'react-router-dom';

export default function ServicesLayout() {
  return (
    <>
      We offer the following services:
      <Outlet />
    </>
  );
}