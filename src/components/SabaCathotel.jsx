import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Overview from "../components/TabProjects/Overview";
import UseCase from "../components/TabProjects/UseCase";
import Database from "../components/TabProjects/Database";
import Preview from "../components/TabProjects/Preview";
import TabButton from "../components/ui/TabButton";

export default function SabaCathotel() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", name: "OVERVIEW" },
    { id: "usecase", name: "USE CASE" },
    { id: "database", name: "DATABASE" },
    { id: "preview", name: "PREVIEW" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "usecase":
        return <UseCase />;
      case "database":
        return <Database />;
      case "preview":
        return <Preview />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="p-4">
      <div className="text-base md:text-2xl">
        <p className="text-accent">
          Saba Cat Hotel Reservation Management System
        </p>
        <p className="text-primary lowercase">
          (Final Year Project – Individual)
        </p>
      </div>

      <div className="w-full flex flex-nowrap md:justify-center gap-4 md:gap-12 mb-12 mt-10 overflow-x-auto px-4 py-2 mask-tabs scrollbar-none">
        {tabs.map((tab) => (
          <div key={tab.id} className="shrink-0">
            <TabButton
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </TabButton>
          </div>
        ))}
      </div>

      <div className="w-full max-w-5xl text-left mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
