import {Box, Tabs as MUITabs, Tab} from "@mui/material";

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

const Tabs = ({ activeTab, handleTabChange, tabs, children }) => {
  return (
    <div className="basicTabs">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <MUITabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="basic tabs example"
          > 
            {
                tabs.map((label, key) => 
                <Tab
                    key={key}
                  style={{ textTransform: "capitalize" }}
                  label={label}
                  {...a11yProps(key)}
                />)
            }
          </MUITabs>
        </Box>
          {children}
      </Box>
    </div>
  );
};

export default Tabs;
