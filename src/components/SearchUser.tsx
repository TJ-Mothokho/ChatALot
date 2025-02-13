import { useEffect, useState } from "react";
import { Input } from "./ui/input";
//import { ButtonLink } from "./Buttons";
import DisplayAvatar from "./DisplayAvatar";
//import { Search } from "lucide-react";

const SearchUser = () => {
  const [users, setUsers] = useState([
    { username: "rafxjay", image: "", url: "", fallback: "R" },
  ]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([
    { username: "", image: "", url: "", fallback: "" },
  ]);

  useEffect(() => {
    const getUsers = localStorage.getItem("users");

    if (getUsers != null) {
      setUsers(JSON.parse(getUsers));
    }
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);

    if (value == "") {
      setSuggestions([{ username: "", image: "", url: "", fallback: "r" }]);
      return;
    }

    // Filter suggestions based on input
    try {
      const filtered = users.filter((user) =>
        user.username.startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
    } catch {
      setSuggestions([
        { username: "User not found", image: "g", url: "gb", fallback: "g" },
      ]);
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
              <DisplayAvatar
                className="mt-2"
                key={index}
                username={item.username}
                image={item.image}
                url={item.url}
              />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchUser;
