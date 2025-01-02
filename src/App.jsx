else if (currentPage === "colleges") pageContent = renderCollegesPage();
else if (currentPage === "wins") pageContent = renderWinsPage();
else if (currentPage === "summary") pageContent = renderSummaryPage();

return <div className="App">{pageContent}</div>;
};

export default App;