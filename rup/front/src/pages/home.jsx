import React from 'react';
import { Link } from "react-router-dom";

const SideBarData = [
  {
      title: "Atividades",
      path: "/atividades",
  },
  {
      title: "Pagamento",
      path: "/pagamento",
  },
  {
      title: "Responsável",
      path: "/responsavel",
  },
];

function Home() {
  return (
    <>
      {SideBarData.map((item, index) => {
        return (
          <div key={index}>
            <Link to={item.path}>
              <p>{item.title}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Home;
