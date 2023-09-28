import React from 'react';
import {Tab, Tabs} from 'react-bootstrap'

const DienstleistungTabs = ({ tabs, activeTab, handleTabChange}) => {
    return (
        <Tabs
            transition={false}
            id="dienstleistungen-tabs"
            className="mb-3"
            activeKey={activeTab}
            onSelect={handleTabChange}
        >
            {tabs.map((tab) => (
                <Tab key={tab.key} eventKey={tab.key} title={tab.title} />
            ))}
        </Tabs>
    );
};

export default DienstleistungTabs;

