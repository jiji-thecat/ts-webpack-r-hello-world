/**
 *
 * https://leetcode.com/discuss/interview-experience/5501338/Zalando-or-Senior-Software-Engineer(FE)-or-8-YOE-or-SELECTED
 *
 * Debounce in React Problem
Problem Statement

You are tasked to implement a search suggestion feature using React. The feature should fetch suggestions from a mock API whenever the user types in the search box. To optimize performance, you must use debouncing to limit the frequency of API calls.
Requirements

    Search Input:
        Provide an input field for users to type in their query.
        Trigger an API call to fetch suggestions, but only 300ms after the user stops typing.

    Mock API:
        Use the mock function below to simulate fetching suggestions:

        const mockData = ["React", "Redux", "React Native", "Vue", "Angular", "Svelte"];

        const fetchSuggestions = (query) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(mockData.filter((item) => item.toLowerCase().includes(query.toLowerCase())));
            }, 500);
          });
        };

    Result Display:
        Show the list of suggestions returned from the API in real-time as the user types.

    Bonus: Clear the suggestion list if the input field is empty.

Example

    When the user types "Re", the suggestions "React", "Redux", and "React Native" should appear after a debounce delay of 300ms.
    If the user erases the input, the suggestion list should disappear.

Hints

    Debounce Function:
        Use a debounce utility like lodash.debounce, or write your own using setTimeout and clearTimeout.
        Example: debounce(fetchSuggestions, 300) ensures the fetchSuggestions function is called only after 300ms of no user input.

    useEffect Hook:
        Monitor the input field’s state (query) and call the debounced API-fetching function when it changes.

Tasks

    Create a functional component in React.
    Use state to manage the query and suggestions.
    Implement debouncing for the API call to ensure it fires only after the specified delay.

Deliverables

    A working search bar with real-time suggestions that utilizes debounce.
    Clean and reusable code with proper React best practices.

Let me know if you need more hints or clarifications!
 */
import { useEffect, useState, useCallback, useRef } from 'react';
const mockData = ['React', 'Redux', 'React Native', 'Vue', 'Angular', 'Svelte'];

const fetchSuggestions = (query: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.filter((item) => item.toLowerCase().includes(query.toLowerCase())));
    }, 500);
  });
};

const debounce = (func: () => void, delay: number) => {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => func(), delay);
  };
};

export default () => {
  const [options, setOptions] = useState<string[]>([]);
  const [query, setQuery] = useState('');

  const fetchDebounced = useCallback(
    () =>
      debounce(async () => {
        if (query.trim()) {
          const result = await fetchSuggestions(query);
          setOptions(result);
        } else {
          setOptions([]);
        }
      }, 300),
    [query]
  );

  useEffect(() => {
    const exec = fetchDebounced();
    exec();
  }, [query]);

  const onChange = useCallback((e: any) => {
    setQuery(e.target.value);
  }, []);

  return (
    <>
      <div className="body">
        <input type="text" value={query} onChange={onChange}></input>
        <ul>
          {options.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
      <style>
        {`
        .body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}
      </style>
    </>
  );
};

/**
 import React, { useState, useEffect } from "react";

// Mock data and API function
const mockData = ["React", "Redux", "React Native", "Vue", "Angular", "Svelte"];

const fetchSuggestions = (query: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.filter((item) => item.toLowerCase().includes(query.toLowerCase())));
    }, 500); // Simulating API delay
  });
};

// Debounce function
const debounce = <T extends (...args: any[]) => void>(func: T, delay: number): T => {
  let timer: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  }) as T;
};

// Main Component
const SearchWithDebounce: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // Search query
  const [suggestions, setSuggestions] = useState<string[]>([]); // Suggestions list

  // Debounced function to fetch suggestions
  const fetchDebouncedSuggestions = debounce(async (q: string) => {
    if (q.trim()) {
      const results = await fetchSuggestions(q);
      setSuggestions(results);
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  }, 300);

  // Effect to call debounced fetch function on query change
  useEffect(() => {
    fetchDebouncedSuggestions(query);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchWithDebounce;


 */
