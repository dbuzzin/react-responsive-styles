import { convertPropsToQuery } from "../src/lib/helpers";

describe("Helper Functions", () => {
    describe("convertPropsToQuery", () => {
        it("Should return \"(any-hover: hover)\"", () => {
            const props = { anyHover: "hover" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(any-hover: hover)");
        });
        it("Should return \"(any-pointer: fine)\"", () => {
            const props = { anyPointer: "fine" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(any-pointer: fine)");
        });
        it("Should return \"(aspect-ratio: 1/1) and (min-aspect-ratio: 8/5) and (max-aspect-ratio: 3/2)\"", () => {
            const props = { aspectRatio: "1/1", minAspectRatio: "8/5", maxAspectRatio: "3/2" };
            const query = convertPropsToQuery(props);
            
            expect(query).toBe("(aspect-ratio: 1/1) and (min-aspect-ratio: 8/5) and (max-aspect-ratio: 3/2)");
        });
        it("Should return \"(color)\"", () => {
            const props = { color: true };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(color)");
        });
        it("Should return \"(color)\"", () => {
            const props = { color: "all" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(color)");
        });
        it("Should return \"(color: 16) and (min-color: 8) and (max-color: 24)\"", () => {
            const props = { color: 16, minColor: 8, maxColor: "24" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(color: 16) and (min-color: 8) and (max-color: 24)");
        });
        it("Should return \"(color-gamut: srgb)\"", () => {
            const props = { colorGamut: "srgb" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(color-gamut: srgb)");
        });
        it("Should return \"(color-index: 1500) and (min-color-index: 1500) and (max-color-index: 1500)\"", () => {
            const props = { colorIndex: 1500, minColorIndex: 1500, maxColorIndex: "1500" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(color-index: 1500) and (min-color-index: 1500) and (max-color-index: 1500)");
        });
        it("Should return \"(display-mode: fullscreen)\"", () => {
            const props = { displayMode: "fullscreen" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(display-mode: fullscreen)");
        });
        it("Should return \"(forced-colors: active)\"", () => {
            const props = { forcedColors: "active" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(forced-colors: active)");
        });
        it("Should return \"(grid: 1)\"", () => {
            const props = { grid: "1" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(grid: 1)");
        });
        it("Should return \"(height: 300px) and (min-height: 250px) and (max-height: 500px)\"", () => {
            const props = { height: "300px", minHeight: "250px", maxHeight: "500px" };
            const query = convertPropsToQuery(props);
            
            expect(query).toBe("(height: 300px) and (min-height: 250px) and (max-height: 500px)");
        });
        it("Should return \"(hover: hover)\"", () => {
            const props = { hover: "hover" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(hover: hover)");
        });
        it("Should return \"(inverted-colors: inverted)\"", () => {
            const props = { invertedColors: "inverted" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(inverted-colors: inverted)");
        });
        it("Should return \"(light-level: normal)\"", () => {
            const props = { lightLevel: "normal" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(light-level: normal)");
        });
        it("Should return \"(monochrome: 0)\"", () => {
            const props = { monochrome: "0" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(monochrome: 0)");
        });
        it("Should return \"(orientation: landscape)\"", () => {
            const props = { orientation: "landscape" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(orientation: landscape)");
        });
        it("Should return \"(overflow-block: scroll)\"", () => {
            const props = { overflowBlock: "scroll" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(overflow-block: scroll)");
        });
        it("Should return \"(overflow-inline: scroll)\"", () => {
            const props = { overflowInline: "scroll" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(overflow-inline: scroll)");
        });
        it("Should return \"(pointer: fine)\"", () => {
            const props = { pointer: "fine" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(pointer: fine)");
        });
        it("Should return \"(prefers-color-scheme: dark)\"", () => {
            const props = { prefersColorScheme: "dark" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(prefers-color-scheme: dark)");
        });
        it("Should return \"(prefers-contrast: high)\"", () => {
            const props = { prefersContrast: "high" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(prefers-contrast: high)");
        });
        it("Should return \"(prefers-reduced-motion: reduce)\"", () => {
            const props = { prefersReducedMotion: "reduce" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(prefers-reduced-motion: reduce)");
        });
        it("Should return \"(prefers-reduced-transparency: reduce)\"", () => {
            const props = { prefersReducedTransparency: "reduce" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(prefers-reduced-transparency: reduce)");
        });
        it("Should return \"(resolution: 150dpi) and (min-resolution: 72dpi) and (max-resolution: 300dpi)\"", () => {
            const props = { resolution: "150dpi", minResolution: "72dpi", maxResolution: "300dpi" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(resolution: 150dpi) and (min-resolution: 72dpi) and (max-resolution: 300dpi)");
        });
        it("Should return \"(scan: interlace)\"", () => {
            const props = { scan: "interlace" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(scan: interlace)");
        });
        it("Should return \"(update: fast)\"", () => {
            const props = { update: "fast" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(update: fast)");
        });
        it("Should return \"(width: 300px) and (min-width: 250px) and (max-width: 500px)\"", () => {
            const props = { width: "300px", minWidth: "250px", maxWidth: "500px" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("(width: 300px) and (min-width: 250px) and (max-width: 500px)");
        });
        it("Should return \"screen and (width: 600px)\"", () => {
            const props = { type: "screen", width: "600px" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("screen and (width: 600px)");
        });
        it("Should return \"screen and (min-width: 600px)\"", () => {
            const props = { type: "screen", minWidth: "600px" };
            const query = convertPropsToQuery(props);

            expect(query).toBe("screen and (min-width: 600px)");
        });
    });
});