import React, { useState } from "react";
import Modal from "../shared/Modal";
import "./koala.css";

const pandaFacts = {
  0: "Pandas share close genetic similarities with bears and raccoons.",
  1: "The typical panda grows from 1.2 m to 1.9 m.",
  2: "Pandas are native to south-central China.",
  3: "In captivity, the average lifespan of a panda is 30 years.",
  4: "Pandas typically weigh from 70 kg to 100 kg.",
  5: "An estimated 1,864 pandas still roam the wild, while 400 are kept in captivity.",
  6: "Pandas rely on spatial memory (recording of information about one’s environment) rather than visual memory.",
  7: "The panda’s gestation only takes 3 up to 5 months.",
  8: "Cubs or baby pandas are born regularly in summer, mostly in August.",
  9: "Pandas usually make nests from branches and dry grass.",
  10: "In general, pandas only give birth to a single cub or baby panda.",
  11: "Most pandas live in the mountain ranges of central China, mostly in Sichuan, Gansu and Shaanxi.",
  12: "Commercial farming and deforestation threatens pandas.",
  13: "China has two national symbols: the Chinese dragon and the giant panda.",
  14: "Pandas favor black bamboo, water bamboo, and arrow bamboo among 10 other bamboo species.",
  15: "China owns all the pandas in the world.",
  16: "The world’s oldest panda lived up to 38 years.",
  17: "Pandas can survive on a bamboo diet alone.",
  18: "China views the panda as a symbol of friendship and peace.",
  19: "Pandas eat up to 38kg of bamboo each day to meet their energy needs.",
  20: "A panda year is equivalent to three human years",
  21: "Pandas have 6 fingers!",
  22: "Pandas will abandon a child if she has twins.",
  23: "Pandas like climbing trees and can swim.",
  24: "Eating and sleeping make up pandas' daily life.",
  25: "Pandas are loners.",
  26: "A panda can poop 28 kilos (62 lb) per day!",
  27: "Pandas used to eat meat.",
  28: "Pandas have black and white coats.",
  29: "Spring is the mating season for pandas.",
  30: "Panda cubs are pink.",
};

export default function KoalaImage() {
  const [modal, setModal] = useState(false);
  const [facts, setFacts] = useState("");

  const onShowModal = () => {
    setModal(true);
    setFacts(pandaFacts[Math.floor(Math.random() * 31)]);
  };

  const onHideModal = () => {
    setModal(false);
    setFacts("");
  };
  return (
    <div>
      <Modal show={modal} handleClose={onHideModal}>
        <p>{facts}</p>
      </Modal>
      <div className="body">
        <div className="box">
          <div className="shadow" />
          <div className="left-leg" />
          <div className="right-leg" />
          <div className="left-foot" />
          <div className="right-foot" />
          <div className="body-middle" />
          <div className="body-left" />
          <div className="body-right" />
          <div className="body-bottom-upper-part" />
          <div className="body-bottom" />
          <div className="left-ear" />
          <div className="right-ear" />
          <div className="head-left">
            <div className="left-eye">
              <div className="left-pupil" />
            </div>
          </div>
          <div className="head-right">
            <div className="right-eye">
              <div className="right-pupil" />
            </div>
          </div>
          <div className="head-bottom">
            <div className="nose" onClick={onShowModal} />

            <div className="mouth" />
            <div className="mouth-copy" />
          </div>
        </div>
      </div>
    </div>
  );
}
