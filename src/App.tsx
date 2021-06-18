import React, { useEffect, useState } from "react";
import "./App.css";
import {
  getInitialPreferenceForSignature,
  PropositionalVariable,
  WorldPreference,
} from "@rhazn/logic-ts";
import {
  CreateSignature,
  ShowSignature,
  WorldPreferenceComponent,
} from "@rhazn/logic-components-react";

function App() {
  const [signature, setSignature] = useState<Set<PropositionalVariable>>(
    new Set(["a"] as PropositionalVariable[])
  );
  const [preference, setPreference] = useState<WorldPreference>();
  const [isTPO, setIsTpo] = useState<boolean>(false);

  useEffect(() => {
    setPreference(getInitialPreferenceForSignature(signature));
  }, [signature]);

  const pad = (s: string, n: number): string =>
    "0".repeat(Math.max(0, n - s.length)) + s;

  return (
    <div className="App">
      <header className="App-header">Preference Builder</header>
      <div className="flex-row">
        <div className="flex-column">
          <h2>Current Signature</h2>
          <ShowSignature signature={signature} />
        </div>

        <div className="flex-column">
          <h2>Create new signature</h2>
          <CreateSignature
            onSignatureUpdated={(e: CustomEvent<Set<PropositionalVariable>>) =>
              setSignature(e.detail)
            }
          />
        </div>

        <div className="flex-column">
          <h2>Allow empty ranks?</h2>
          <button onClick={() => setIsTpo(!isTPO)}>
            {isTPO ? "No" : "Yes"}
          </button>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-column">
          <h2>Preference order</h2>
          <WorldPreferenceComponent
            preference={preference}
            allowEmptyRows={!isTPO}
            onPreferenceChanged={(e: any) => setPreference(e.detail as any)}
          />
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-column">
          <h2>As JSON</h2>
          <textarea
            className="code text-representation"
            value={preference?.toJson()}
          ></textarea>
        </div>
        <div className="flex-column">
          <h2>As Binary</h2>
          <textarea
            className="code text-representation"
            value={Array.from(
              new Uint8Array(
                preference ? preference.toBinary() : new ArrayBuffer(0)
              )
            )
              .map((value) => pad(value.toString(2), 8))
              .join("")}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
