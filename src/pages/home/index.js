import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";
import Grampo from "./grampo.png";

import Menu from "../../components/menu";
import LinkItem from "../../components/LinkItem";

import api from "../../services/api";

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setdata] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortlink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setdata(response.data);
      setShowModal(true);
    } catch {
      alert("Ops parece que algo deu errado!");
      setLink("");
    }
    setShowModal(true);

    setLink("");
  }
  return (
    <div className="container-home">
      <div className="logo">
        <img src={Grampo} alt="Sujeito Link Logo" />

        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurta 👇 </span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortlink}>Gerar links</button>
      </div>

      <Menu />
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
