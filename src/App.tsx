import React, { useEffect, useState } from "react";
import "./App.css";
import {
    getInitialPreferenceForSignature,
    PropositionalVariable,
    WorldPreference,
    WorldPreferenceParserFactory,
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

    const [jsonString, setJsonString] = useState<string | undefined>();
    const [jsonError, setJsonError] = useState<string | undefined>();

    const [binaryString, setBinaryString] = useState<string | undefined>();
    const [binaryError, setBinaryError] = useState<string | undefined>();

    const [binaryRanklistString, setBinaryRanklistString] = useState<
        string | undefined
    >();
    const [binaryRanklistError, setBinaryRanklistError] = useState<
        string | undefined
    >();

    const [show, setShow] = useState<"json" | "binary" | "binaryranklist">(
        "json"
    );

    useEffect(() => {
        setPreference(getInitialPreferenceForSignature(signature));
    }, [signature]);

    useEffect(() => {
        setJsonError(undefined);
        setBinaryError(undefined);
        setBinaryRanklistError(undefined);

        setJsonString(preference?.toJson());
        setBinaryString(
            Array.from(
                new Uint8Array(
                    preference ? preference.toBinary() : new ArrayBuffer(0)
                )
            )
                .map((value) => pad(value.toString(2), 8))
                .join("")
        );
        setBinaryRanklistString(
            Array.from(
                new Uint8Array(
                    preference
                        ? preference.toBinaryRanklist()
                        : new ArrayBuffer(0)
                )
            )
                .map((value) => pad(value.toString(2), 8))
                .join("")
        );
    }, [preference]);

    const handleJsonChanged = (json: string) => {
        setJsonString(json);
        setJsonError(undefined);

        if (json) {
            const parser = new WorldPreferenceParserFactory(signature);

            try {
                const preference = parser.fromJson(json);

                if (preference) {
                    setPreference(preference);
                }
            } catch (e: any) {
                setJsonError(e.message);
            }
        }
    };

    const handleBinaryChanged = (binary: string) => {
        setBinaryString(binary);
        setBinaryError(undefined);

        if (binary) {
            const parser = new WorldPreferenceParserFactory(signature);

            try {
                const preference = parser.fromBinary(
                    stringToArrayBuffer(binary)
                );

                if (preference && preference.data.length > 0) {
                    setPreference(preference);
                }
            } catch (e: any) {
                setBinaryError(e.message);
            }
        }
    };

    const handleBinaryRanklistChanged = (binary: string) => {
        setBinaryRanklistString(binary);
        setBinaryRanklistError(undefined);

        if (binary) {
            const parser = new WorldPreferenceParserFactory(signature);

            try {
                const preference = parser.fromBinaryRanklist(
                    stringToArrayBuffer(binary)
                );

                if (preference && preference.data.length > 0) {
                    setPreference(preference);
                }
            } catch (e: any) {
                setBinaryRanklistError(e.message);
            }
        }
    };

    const pad = (s: string, n: number): string =>
        "0".repeat(Math.max(0, n - s.length)) + s;

    const stringToArrayBuffer = (str: string): ArrayBuffer => {
        const buffer = new Uint8Array(str.length / 8);

        for (let i = 0; i < buffer.length; i++) {
            buffer[i] = parseInt(str.substring(i * 8, i * 8 + 8), 2);
        }

        return buffer.buffer;
    };

    return (
        <div className="App">
            <header className="App-header">Preference Builder</header>
            <h1>Config</h1>
            <div className="flex-row">
                <div className="flex-column">
                    <h2>Current Signature</h2>
                    <ShowSignature signature={signature} />
                </div>

                <div className="flex-column">
                    <h2>Create new signature</h2>
                    <CreateSignature
                        onSignatureUpdated={(
                            e: CustomEvent<Set<PropositionalVariable>>
                        ) => setSignature(e.detail)}
                    />
                </div>

                <div className="flex-column">
                    <h2>Allow empty ranks?</h2>
                    <button onClick={() => setIsTpo(!isTPO)}>
                        {isTPO ? "No" : "Yes"}
                    </button>
                </div>
            </div>
            <h1>Preference</h1>
            <div className="flex-row">
                <div className="flex-column">
                    <h2>Preference order</h2>
                    <WorldPreferenceComponent
                        preference={preference}
                        allowEmptyRows={!isTPO}
                        onPreferenceChanged={(e: any) =>
                            setPreference(e.detail as any)
                        }
                    />
                </div>
                <div className="flex-column">
                    <div className="flex-row">
                        <button
                            disabled={show === "json"}
                            onClick={() => setShow("json")}
                        >
                            Show JSON
                        </button>
                        <button
                            disabled={show === "binary"}
                            onClick={() => setShow("binary")}
                        >
                            Show Binary Worldlist
                        </button>
                        <button
                            disabled={show === "binaryranklist"}
                            onClick={() => setShow("binaryranklist")}
                        >
                            Show Binary Ranklist
                        </button>
                    </div>
                    <div className="flex-row">
                        {show === "json" && (
                            <div className="flex-column">
                                <h2>As JSON</h2>
                                {jsonError && (
                                    <span className="error">{jsonError}</span>
                                )}
                                <textarea
                                    className="code text-representation"
                                    value={jsonString}
                                    onChange={(e) =>
                                        handleJsonChanged(e.target.value)
                                    }
                                ></textarea>
                            </div>
                        )}
                        {show === "binary" && (
                            <div className="flex-column">
                                <h2>As Binary Worldlist</h2>
                                {binaryError && (
                                    <span className="error">{binaryError}</span>
                                )}
                                <textarea
                                    className="code text-representation"
                                    value={binaryString}
                                    onChange={(e) =>
                                        handleBinaryChanged(e.target.value)
                                    }
                                ></textarea>
                            </div>
                        )}
                        {show === "binaryranklist" && (
                            <div className="flex-column">
                                <h2>As Binary Ranklist</h2>
                                {binaryRanklistError && (
                                    <span className="error">
                                        {binaryRanklistError}
                                    </span>
                                )}
                                <textarea
                                    className="code text-representation"
                                    value={binaryRanklistString}
                                    onChange={(e) =>
                                        handleBinaryRanklistChanged(
                                            e.target.value
                                        )
                                    }
                                ></textarea>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
