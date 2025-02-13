import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { ButtonLink } from "./Buttons";
//import { Search } from "lucide-react";

const SearchUser = () => {
  const [users, setUsers] = useState([{ username: "rafxjay" }]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([{ username: "" }]);

  useEffect(() => {
    const getUsers = localStorage.getItem("users");

    if (getUsers != null) {
      setUsers(JSON.parse(getUsers));
    }
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);

    if (value == "") {
      setSuggestions([{ username: "" }]);
      return;
    }

    // Filter suggestions based on input
    try {
      const filtered = users.filter((user) =>
        user.username.startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
    } catch {
      setSuggestions([{ username: "User not found" }]);
    }
  };

  return (
    <>
      <div>
        <Input
          placeholder={`Search or start a new chat`}
          className="mx-1"
          onChange={(e) => handleSearch(e.target.value)}
          value={query}
        />
        {suggestions != null ? (
          <div className="mt-1">
            {suggestions.map((item, index) => (
              <ButtonLink onClick={() => console.log("outline")} key={index}>
                {item.username}
              </ButtonLink>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchUser;
