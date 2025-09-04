import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  Star,
  Search,
  Plus,
  Settings,
  Download,
  Share,
  Edit,
  Trash2,
  Home,
  User,
  Mail,
  Phone,
  Camera,
  Save,
  ArrowRight,
  ArrowLeft,
  Upload,
  LogOut,
  Menu,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Zap,
  Crown,
  Shield,
  Flame,
  Sparkles,
  TrendingUp,
  Clock,
  X,
} from "lucide-react";
import React from "react";

const ComponentsPage = () => {
  return (
    <>
      {/* Color Palette Section */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold">Color Palette</h3>
        <p className="text-sm text-muted-foreground mb-4">
          All color variables used in the design system. These colors update
          dynamically when you switch themes.
        </p>

        {/* Base Colors */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Base Colors</h4>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-background border-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Background</div>
                <code className="text-xs text-muted-foreground">
                  --background
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-foreground"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Foreground</div>
                <code className="text-xs text-muted-foreground">
                  --foreground
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Surface Colors */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Surface Colors</h4>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-card border-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Card</div>
                <code className="text-xs text-muted-foreground">--card</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-card-foreground border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Card Foreground</div>
                <code className="text-xs text-muted-foreground">
                  --card-foreground
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-popover border-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Popover</div>
                <code className="text-xs text-muted-foreground">--popover</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-popover-foreground border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Popover Foreground</div>
                <code className="text-xs text-muted-foreground">
                  --popover-foreground
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Colors */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Brand Colors</h4>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-primary border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Primary</div>
                <code className="text-xs text-muted-foreground">--primary</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-primary-foreground border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Primary Foreground</div>
                <code className="text-xs text-muted-foreground">
                  --primary-foreground
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-secondary border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Secondary</div>
                <code className="text-xs text-muted-foreground">
                  --secondary
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-secondary-foreground border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Secondary Foreground</div>
                <code className="text-xs text-muted-foreground">
                  --secondary-foreground
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* UI Colors */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">UI Colors</h4>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-muted border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Muted</div>
                <code className="text-xs text-muted-foreground">--muted</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-muted-foreground border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Muted Foreground</div>
                <code className="text-xs text-muted-foreground">
                  --muted-foreground
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-accent border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Accent</div>
                <code className="text-xs text-muted-foreground">--accent</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-accent-foreground border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Accent Foreground</div>
                <code className="text-xs text-muted-foreground">
                  --accent-foreground
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-destructive border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Destructive</div>
                <code className="text-xs text-muted-foreground">
                  --destructive
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-destructive-foreground border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">
                  Destructive Foreground
                </div>
                <code className="text-xs text-muted-foreground">
                  --destructive-foreground
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Border & Input Colors */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Border & Input Colors</h4>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-border border-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Border</div>
                <code className="text-xs text-muted-foreground">--border</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-input border-2"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Input</div>
                <code className="text-xs text-muted-foreground">--input</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div className="w-8 h-8 rounded bg-ring border"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Ring</div>
                <code className="text-xs text-muted-foreground">--ring</code>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Colors */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Chart Colors</h4>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--chart-1)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Chart 1</div>
                <code className="text-xs text-muted-foreground">--chart-1</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--chart-2)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Chart 2</div>
                <code className="text-xs text-muted-foreground">--chart-2</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--chart-3)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Chart 3</div>
                <code className="text-xs text-muted-foreground">--chart-3</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--chart-4)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Chart 4</div>
                <code className="text-xs text-muted-foreground">--chart-4</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--chart-5)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Chart 5</div>
                <code className="text-xs text-muted-foreground">--chart-5</code>
              </div>
            </div>
          </div>
        </div>

        {/* Status Colors */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Status Colors</h4>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--red)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Red</div>
                <code className="text-xs text-muted-foreground">--red</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--green)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Green</div>
                <code className="text-xs text-muted-foreground">--green</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--yellow)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Yellow</div>
                <code className="text-xs text-muted-foreground">--yellow</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--lightblue)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Light Blue</div>
                <code className="text-xs text-muted-foreground">
                  --lightblue
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--purple)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Purple</div>
                <code className="text-xs text-muted-foreground">--purple</code>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Colors */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Sidebar Colors</h4>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border-2"
                style={{ backgroundColor: "var(--sidebar)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Sidebar</div>
                <code className="text-xs text-muted-foreground">--sidebar</code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--sidebar-foreground)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Sidebar Foreground</div>
                <code className="text-xs text-muted-foreground">
                  --sidebar-foreground
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--sidebar-primary)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Sidebar Primary</div>
                <code className="text-xs text-muted-foreground">
                  --sidebar-primary
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{
                  backgroundColor: "var(--sidebar-primary-foreground)",
                }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">
                  Sidebar Primary Foreground
                </div>
                <code className="text-xs text-muted-foreground">
                  --sidebar-primary-foreground
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--sidebar-accent)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Sidebar Accent</div>
                <code className="text-xs text-muted-foreground">
                  --sidebar-accent
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{
                  backgroundColor: "var(--sidebar-accent-foreground)",
                }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">
                  Sidebar Accent Foreground
                </div>
                <code className="text-xs text-muted-foreground">
                  --sidebar-accent-foreground
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border-2"
                style={{ backgroundColor: "var(--sidebar-border)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Sidebar Border</div>
                <code className="text-xs text-muted-foreground">
                  --sidebar-border
                </code>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg bg-card">
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: "var(--sidebar-ring)" }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium">Sidebar Ring</div>
                <code className="text-xs text-muted-foreground">
                  --sidebar-ring
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Color Usage Examples */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Live Color Examples</h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Primary Example */}
            <div className="p-4 rounded-lg bg-primary text-primary-foreground">
              <h5 className="font-medium mb-2">Primary Colors</h5>
              <p className="text-sm opacity-90">
                This card uses primary background with primary-foreground text.
              </p>
            </div>

            {/* Secondary Example */}
            <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
              <h5 className="font-medium mb-2">Secondary Colors</h5>
              <p className="text-sm opacity-90">
                This card uses secondary background with secondary-foreground
                text.
              </p>
            </div>

            {/* Muted Example */}
            <div className="p-4 rounded-lg bg-muted text-muted-foreground">
              <h5 className="font-medium mb-2">Muted Colors</h5>
              <p className="text-sm">
                This card uses muted background with muted-foreground text.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Color Palette System Demo */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold">Color Palette System</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Switch between different color palettes using the palette icon in the
          header. Each palette changes the primary, secondary, accent, and ring
          colors across the entire application.
        </p>

        {/* Available Palettes */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Available Color Palettes</h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Default Palette */}
            <div className="p-4 border rounded-lg bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: "#3f756c" }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: "#e1c789" }}
                  ></div>
                </div>
                <h5 className="font-medium">Default</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Original green and gold theme with natural, earthy tones.
              </p>
            </div>

            {/* Blue Ocean Palette */}
            <div className="p-4 border rounded-lg bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: "#0ea5e9" }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: "#7dd3fc" }}
                  ></div>
                </div>
                <h5 className="font-medium">Blue Ocean</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Fresh blue theme inspired by ocean depths and sky.
              </p>
            </div>

            {/* Purple Sage Palette */}
            <div className="p-4 border rounded-lg bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: "#8b5cf6" }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: "#c4b5fd" }}
                  ></div>
                </div>
                <h5 className="font-medium">Purple Sage</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Mystical purple theme with elegant lavender accents.
              </p>
            </div>

            {/* Rose Gold Palette */}
            <div className="p-4 border rounded-lg bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: "#f43f5e" }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: "#fda4af" }}
                  ></div>
                </div>
                <h5 className="font-medium">Rose Gold</h5>
              </div>
              <p className="text-sm text-muted-foreground">
                Warm rose theme with romantic pink and coral tones.
              </p>
            </div>
          </div>
        </div>

        {/* Live Demo */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Live Palette Demo</h4>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Primary Demo */}
            <div className="p-4 rounded-lg bg-primary text-primary-foreground">
              <h5 className="font-medium mb-2">Primary Color</h5>
              <p className="text-sm opacity-90">
                This card background changes when you switch color palettes.
              </p>
              <div className="mt-3">
                <Button variant="secondary" size="sm">
                  Button
                </Button>
              </div>
            </div>

            {/* Secondary Demo */}
            <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
              <h5 className="font-medium mb-2">Secondary Color</h5>
              <p className="text-sm opacity-90">
                Secondary colors also update automatically.
              </p>
              <div className="mt-3">
                <Badge>Badge</Badge>
              </div>
            </div>

            {/* Accent Demo */}
            <div className="p-4 rounded-lg bg-accent text-accent-foreground">
              <h5 className="font-medium mb-2">Accent Color</h5>
              <p className="text-sm opacity-90">
                Accent colors provide subtle backgrounds.
              </p>
              <div className="mt-3">
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-4 border rounded-lg bg-card">
          <h4 className="text-md font-semibold mb-2">How to Use</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              1. <strong>Theme Toggle</strong>: Use the sun/moon icon to switch
              between light and dark modes
            </p>
            <p>
              2. <strong>Color Palette</strong>: Use the palette icon to change
              the color scheme
            </p>
            <p>
              3. <strong>Persistence</strong>: Your preferences are saved and
              restored on page refresh
            </p>
            <p>
              4. <strong>Components</strong>: All UI components automatically
              use the selected colors
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold">Typography</h3>
        <div className="flex gap-4 items-center">
          <p className="text-xs">Extra Small text</p>
          <p className="text-sm">Small text</p>
          <p className="text-base">Base text</p>
          <p className="text-lg">Large text</p>
          <p className="text-xl">Extra large text</p>
          <p className="text-2xl">Extra 2xl text</p>
          <p className="text-3xl">Extra 3xl text</p>
          <p className="text-4xl">Extra 4xl text</p>
        </div>
      </div>

      {/* Simple Text Buttons */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold">
          Text Buttons - All Variants & Sizes
        </h3>

        {/* Filled Variants */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Filled Variants</h4>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Primary:</span>
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="default">
                Default
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
              <Button variant="primary" size="xl">
                Extra Large
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Secondary:</span>
              <Button variant="secondary" size="sm">
                Small
              </Button>
              <Button variant="secondary" size="default">
                Default
              </Button>
              <Button variant="secondary" size="lg">
                Large
              </Button>
              <Button variant="secondary" size="xl">
                Extra Large
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Destructive:</span>
              <Button variant="destructive" size="sm">
                Small
              </Button>
              <Button variant="destructive" size="default">
                Default
              </Button>
              <Button variant="destructive" size="lg">
                Large
              </Button>
              <Button variant="destructive" size="xl">
                Extra Large
              </Button>
            </div>
          </div>
        </div>

        {/* Outline Variants */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Outline Variants</h4>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Default:</span>
              <Button variant="outline" size="sm">
                Small
              </Button>
              <Button variant="outline" size="default">
                Default
              </Button>
              <Button variant="outline" size="lg">
                Large
              </Button>
              <Button variant="outline" size="xl">
                Extra Large
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Primary:</span>
              <Button variant="outline-primary" size="sm">
                Small
              </Button>
              <Button variant="outline-primary" size="default">
                Default
              </Button>
              <Button variant="outline-primary" size="lg">
                Large
              </Button>
              <Button variant="outline-primary" size="xl">
                Extra Large
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Secondary:</span>
              <Button variant="outline-secondary" size="sm">
                Small
              </Button>
              <Button variant="outline-secondary" size="default">
                Default
              </Button>
              <Button variant="outline-secondary" size="lg">
                Large
              </Button>
              <Button variant="outline-secondary" size="xl">
                Extra Large
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Destructive:</span>
              <Button variant="outline-destructive" size="sm">
                Small
              </Button>
              <Button variant="outline-destructive" size="default">
                Default
              </Button>
              <Button variant="outline-destructive" size="lg">
                Large
              </Button>
              <Button variant="outline-destructive" size="xl">
                Extra Large
              </Button>
            </div>
          </div>
        </div>

        {/* Ghost Variants */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Ghost Variants</h4>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Default:</span>
              <Button variant="ghost" size="sm">
                Small
              </Button>
              <Button variant="ghost" size="default">
                Default
              </Button>
              <Button variant="ghost" size="lg">
                Large
              </Button>
              <Button variant="ghost" size="xl">
                Extra Large
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Primary:</span>
              <Button variant="ghost-primary" size="sm">
                Small
              </Button>
              <Button variant="ghost-primary" size="default">
                Default
              </Button>
              <Button variant="ghost-primary" size="lg">
                Large
              </Button>
              <Button variant="ghost-primary" size="xl">
                Extra Large
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Secondary:</span>
              <Button variant="ghost-secondary" size="sm">
                Small
              </Button>
              <Button variant="ghost-secondary" size="default">
                Default
              </Button>
              <Button variant="ghost-secondary" size="lg">
                Large
              </Button>
              <Button variant="ghost-secondary" size="xl">
                Extra Large
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Destructive:</span>
              <Button variant="ghost-destructive" size="sm">
                Small
              </Button>
              <Button variant="ghost-destructive" size="default">
                Default
              </Button>
              <Button variant="ghost-destructive" size="lg">
                Large
              </Button>
              <Button variant="ghost-destructive" size="xl">
                Extra Large
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Only Buttons */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold">
          Icon Only Buttons - All Variants & Sizes
        </h3>

        {/* Filled Icon Buttons */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Filled Icon Buttons</h4>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Primary:</span>
              <Button variant="primary" size="icon-sm" aria-label="Add">
                <Plus className="size-3" />
              </Button>
              <Button variant="primary" size="icon-default" aria-label="Add">
                <Plus className="size-4" />
              </Button>
              <Button variant="primary" size="icon-lg" aria-label="Add">
                <Plus className="size-4" />
              </Button>
              <Button variant="primary" size="icon-xl" aria-label="Add">
                <Plus className="size-5" />
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Secondary:</span>
              <Button variant="secondary" size="icon-sm" aria-label="Search">
                <Search className="size-3" />
              </Button>
              <Button
                variant="secondary"
                size="icon-default"
                aria-label="Search"
              >
                <Search className="size-4" />
              </Button>
              <Button variant="secondary" size="icon-lg" aria-label="Search">
                <Search className="size-4" />
              </Button>
              <Button variant="secondary" size="icon-xl" aria-label="Search">
                <Search className="size-5" />
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Destructive:</span>
              <Button variant="destructive" size="icon-sm" aria-label="Delete">
                <Trash2 className="size-3" />
              </Button>
              <Button
                variant="destructive"
                size="icon-default"
                aria-label="Delete"
              >
                <Trash2 className="size-4" />
              </Button>
              <Button variant="destructive" size="icon-lg" aria-label="Delete">
                <Trash2 className="size-4" />
              </Button>
              <Button variant="destructive" size="icon-xl" aria-label="Delete">
                <Trash2 className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Outline Icon Buttons */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Outline Icon Buttons</h4>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Default:</span>
              <Button variant="outline" size="icon-sm" aria-label="Edit">
                <Edit className="size-3" />
              </Button>
              <Button variant="outline" size="icon-default" aria-label="Edit">
                <Edit className="size-4" />
              </Button>
              <Button variant="outline" size="icon-lg" aria-label="Edit">
                <Edit className="size-4" />
              </Button>
              <Button variant="outline" size="icon-xl" aria-label="Edit">
                <Edit className="size-5" />
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Primary:</span>
              <Button
                variant="outline-primary"
                size="icon-sm"
                aria-label="Settings"
              >
                <Settings className="size-3" />
              </Button>
              <Button
                variant="outline-primary"
                size="icon-default"
                aria-label="Settings"
              >
                <Settings className="size-4" />
              </Button>
              <Button
                variant="outline-primary"
                size="icon-lg"
                aria-label="Settings"
              >
                <Settings className="size-4" />
              </Button>
              <Button
                variant="outline-primary"
                size="icon-xl"
                aria-label="Settings"
              >
                <Settings className="size-5" />
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Destructive:</span>
              <Button
                variant="outline-destructive"
                size="icon-sm"
                aria-label="Remove"
              >
                <Trash2 className="size-3" />
              </Button>
              <Button
                variant="outline-destructive"
                size="icon-default"
                aria-label="Remove"
              >
                <Trash2 className="size-4" />
              </Button>
              <Button
                variant="outline-destructive"
                size="icon-lg"
                aria-label="Remove"
              >
                <Trash2 className="size-4" />
              </Button>
              <Button
                variant="outline-destructive"
                size="icon-xl"
                aria-label="Remove"
              >
                <Trash2 className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Ghost Icon Buttons */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Ghost Icon Buttons</h4>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Default:</span>
              <Button variant="ghost" size="icon-sm" aria-label="Menu">
                <Menu className="size-3" />
              </Button>
              <Button variant="ghost" size="icon-default" aria-label="Menu">
                <Menu className="size-4" />
              </Button>
              <Button variant="ghost" size="icon-lg" aria-label="Menu">
                <Menu className="size-4" />
              </Button>
              <Button variant="ghost" size="icon-xl" aria-label="Menu">
                <Menu className="size-5" />
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Primary:</span>
              <Button variant="ghost-primary" size="icon-sm" aria-label="Home">
                <Home className="size-3" />
              </Button>
              <Button
                variant="ghost-primary"
                size="icon-default"
                aria-label="Home"
              >
                <Home className="size-4" />
              </Button>
              <Button variant="ghost-primary" size="icon-lg" aria-label="Home">
                <Home className="size-4" />
              </Button>
              <Button variant="ghost-primary" size="icon-xl" aria-label="Home">
                <Home className="size-5" />
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Destructive:</span>
              <Button
                variant="ghost-destructive"
                size="icon-sm"
                aria-label="Delete"
              >
                <Trash2 className="size-3" />
              </Button>
              <Button
                variant="ghost-destructive"
                size="icon-default"
                aria-label="Delete"
              >
                <Trash2 className="size-4" />
              </Button>
              <Button
                variant="ghost-destructive"
                size="icon-lg"
                aria-label="Delete"
              >
                <Trash2 className="size-4" />
              </Button>
              <Button
                variant="ghost-destructive"
                size="icon-xl"
                aria-label="Delete"
              >
                <Trash2 className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Text + Icon Combinations */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold">Text + Icon Combinations</h3>

        {/* Icon + Text (Icon Left) */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Icon + Text (Icon Left)</h4>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Filled:</span>
              <Button variant="primary" size="sm">
                <Download className="size-3" />
                Download
              </Button>
              <Button variant="secondary" size="default">
                <Save className="size-4" />
                Save Changes
              </Button>
              <Button variant="destructive" size="lg">
                <Trash2 className="size-4" />
                Delete Item
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Outline:</span>
              <Button variant="outline" size="sm">
                <Upload className="size-3" />
                Upload
              </Button>
              <Button variant="outline-primary" size="default">
                <Settings className="size-4" />
                Settings
              </Button>
              <Button variant="outline-destructive" size="lg">
                <LogOut className="size-4" />
                Sign Out
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Ghost:</span>
              <Button variant="ghost" size="sm">
                <Edit className="size-3" />
                Edit
              </Button>
              <Button variant="ghost-primary" size="default">
                <Star className="size-4" />
                Add to Favorites
              </Button>
              <Button variant="ghost-destructive" size="lg">
                <Trash2 className="size-4" />
                Remove
              </Button>
            </div>
          </div>
        </div>

        {/* Text + Icon (Icon Right) */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Text + Icon (Icon Right)</h4>
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Filled:</span>
              <Button variant="primary" size="sm">
                Continue
                <ArrowRight className="size-3" />
              </Button>
              <Button variant="secondary" size="default">
                Next Step
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="destructive" size="lg">
                Proceed with Deletion
                <ArrowRight className="size-4" />
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Outline:</span>
              <Button variant="outline" size="sm">
                Go Back
                <ArrowLeft className="size-3" />
              </Button>
              <Button variant="outline-primary" size="default">
                Learn More
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline-secondary" size="lg">
                View Details
                <ArrowRight className="size-4" />
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm w-20">Ghost:</span>
              <Button variant="ghost" size="sm">
                Cancel
                <ArrowLeft className="size-3" />
              </Button>
              <Button variant="ghost-primary" size="default">
                Explore
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="ghost-secondary" size="lg">
                Advanced Options
                <Settings className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold">Common Use Cases</h3>

        <div className="space-y-6">
          {/* Call to Action Section */}
          <div className="space-y-2">
            <h4 className="text-md font-semibold">Call to Action</h4>
            <div className="flex gap-2">
              <Button variant="primary" size="lg">
                <Download className="size-4" />
                Get Started Free
              </Button>
              <Button variant="outline-primary" size="lg">
                Learn More
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Form Actions */}
          <div className="space-y-2">
            <h4 className="text-md font-semibold">Form Actions</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="default">
                Cancel
              </Button>
              <Button variant="outline" size="default">
                Save Draft
                <Save className="size-4" />
              </Button>
              <Button variant="primary" size="default">
                Publish
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Toolbar Actions */}
          <div className="space-y-2">
            <h4 className="text-md font-semibold">Toolbar Actions</h4>
            <div className="flex gap-1 p-2 border rounded-lg bg-muted/50">
              <Button variant="ghost" size="icon-sm" aria-label="Edit">
                <Edit className="size-3" />
              </Button>
              <Button variant="ghost" size="icon-sm" aria-label="Copy">
                <Share className="size-3" />
              </Button>
              <Button variant="ghost" size="icon-sm" aria-label="Download">
                <Download className="size-3" />
              </Button>
              <div className="w-px bg-border mx-1" />
              <Button
                variant="ghost-destructive"
                size="icon-sm"
                aria-label="Delete"
              >
                <Trash2 className="size-3" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h4 className="text-md font-semibold">Navigation</h4>
            <div className="flex gap-2">
              <Button variant="ghost-primary" size="default">
                <Home className="size-4" />
                Home
              </Button>
              <Button variant="ghost" size="default">
                <User className="size-4" />
                Profile
              </Button>
              <Button variant="ghost" size="default">
                <Settings className="size-4" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Variants Section */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold">Card Variants</h3>

        {/* Basic Cards */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Basic Cards</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Simple Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="font-semibold mb-2">Simple Card</h3>
              <p className="text-sm text-muted-foreground">
                A basic card with minimal styling and clean typography.
              </p>
            </div>

            {/* Card with Header */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 pb-2">
                <h3 className="font-semibold">Card with Header</h3>
                <p className="text-sm text-muted-foreground">
                  Card description
                </p>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm">
                  This card has a dedicated header section with title and
                  description.
                </p>
              </div>
            </div>

            {/* Card with Footer */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 pb-2">
                <h3 className="font-semibold mb-2">Card with Footer</h3>
                <p className="text-sm text-muted-foreground">
                  This card includes action buttons in the footer.
                </p>
              </div>
              <div className="p-6 pt-2 border-t">
                <div className="flex gap-2">
                  <Button size="sm" variant="primary">
                    Accept
                  </Button>
                  <Button size="sm" variant="outline">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Cards */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Interactive Cards</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Hoverable Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 transition-all hover:shadow-md hover:scale-105 cursor-pointer">
              <h3 className="font-semibold mb-2">Hoverable Card</h3>
              <p className="text-sm text-muted-foreground">
                Hover over this card to see the interactive effect.
              </p>
            </div>

            {/* Clickable Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer">
              <h3 className="font-semibold mb-2">Clickable Card</h3>
              <p className="text-sm text-muted-foreground">
                This card changes background color on hover.
              </p>
            </div>

            {/* Card with Action */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Action Card</h3>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Settings className="size-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Action button appears on hover.
              </p>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Status Cards</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Success Card */}
            <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800 p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <h3 className="font-semibold text-green-800 dark:text-green-200">
                  Success
                </h3>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300">
                Operation completed successfully.
              </p>
            </div>

            {/* Warning Card */}
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-950 dark:border-yellow-800 p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">
                  Warning
                </h3>
              </div>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Please review the following items.
              </p>
            </div>

            {/* Error Card */}
            <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800 p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <h3 className="font-semibold text-red-800 dark:text-red-200">
                  Error
                </h3>
              </div>
              <p className="text-sm text-red-700 dark:text-red-300">
                Something went wrong.
              </p>
            </div>

            {/* Info Card */}
            <div className="rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800 p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200">
                  Info
                </h3>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Here's some helpful information.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Feature Cards</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Product Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Product Feature</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Showcase your product features with this card design.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Statistics</h3>
                <div className="text-sm text-muted-foreground">+12%</div>
              </div>
              <div className="text-2xl font-bold mb-1">2,847</div>
              <p className="text-sm text-muted-foreground">
                Total users this month
              </p>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary rounded-full"></div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <User className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">
                    Product Manager
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="primary">
                  Connect
                </Button>
                <Button size="sm" variant="ghost">
                  <Mail className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Complex Cards */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Complex Cards</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Dashboard Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 pb-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Dashboard Overview</h3>
                  <Button variant="ghost" size="icon-sm">
                    <Settings className="size-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  System performance metrics
                </p>
              </div>
              <div className="px-6 pb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold">98.2%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold">1.2s</div>
                    <div className="text-xs text-muted-foreground">
                      Response
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Card */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="size-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">
                      New Feature Available
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      We've added a new dashboard feature that helps you track
                      performance metrics more effectively.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="primary">
                        Try It Now
                      </Button>
                      <Button size="sm" variant="ghost">
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Layouts */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Card Layouts</h4>

          {/* Horizontal Card */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Horizontal Layout Card</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  This card uses a horizontal layout with image and content side
                  by side.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Share className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* List Card */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 pb-2">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
            </div>
            <div className="px-6 pb-6">
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="size-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">
                        User Activity {item}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        2 hours ago
                      </div>
                    </div>
                    <Button variant="ghost" size="icon-sm">
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge Variants Section */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold">Badge Variants</h3>

        {/* Basic Badge Variants */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Basic Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        {/* Size Variants */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Size Variants</h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="text-xs px-1.5 py-0.5">Small</Badge>
            <Badge className="text-xs px-2 py-0.5">Default</Badge>
            <Badge className="text-sm px-3 py-1">Large</Badge>
            <Badge className="text-base px-4 py-1.5">Extra Large</Badge>
          </div>
        </div>

        {/* Badges with Icons */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Badges with Icons</h4>
          <div className="flex flex-wrap gap-3">
            <Badge>
              <Star className="size-3" />
              Featured
            </Badge>
            <Badge variant="secondary">
              <Zap className="size-3" />
              Fast
            </Badge>
            <Badge variant="outline">
              <Shield className="size-3" />
              Verified
            </Badge>
            <Badge variant="destructive">
              <X className="size-3" />
              Error
            </Badge>
          </div>
        </div>

        {/* Dismissible Badges */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Dismissible Badges</h4>
          <div className="flex flex-wrap gap-3">
            <Badge className="pr-1">
              Tag 1
              <Button
                variant="ghost"
                size="icon-sm"
                className="w-4 h-4 ml-1 hover:bg-primary-foreground/20"
              >
                <X className="size-3" />
              </Button>
            </Badge>
            <Badge variant="secondary" className="pr-1">
              Tag 2
              <Button
                variant="ghost"
                size="icon-sm"
                className="w-4 h-4 ml-1 hover:bg-secondary-foreground/20"
              >
                <X className="size-3" />
              </Button>
            </Badge>
            <Badge variant="outline" className="pr-1">
              Tag 3
              <Button
                variant="ghost"
                size="icon-sm"
                className="w-4 h-4 ml-1 hover:bg-foreground/20"
              >
                <X className="size-3" />
              </Button>
            </Badge>
          </div>
        </div>

        {/* Badge Combinations */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">
            Badge Combinations & Use Cases
          </h4>
          <div className="space-y-4">
            {/* User Profile Example */}
            <div className="p-4 border rounded-lg bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <User className="size-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">
                    Product Manager
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>
                  <CheckCircle className="size-3" />
                  Verified
                </Badge>
                <Badge variant="secondary">
                  <Crown className="size-3" />
                  Premium
                </Badge>
                <Badge variant="outline">Admin</Badge>
              </div>
            </div>

            {/* Product Card Example */}
            <div className="p-4 border rounded-lg bg-card">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-medium">Premium Product</h3>
                <div className="flex gap-2">
                  <Badge variant="destructive">
                    <Flame className="size-3" />
                    Hot
                  </Badge>
                  <Badge>
                    <Sparkles className="size-3" />
                    New
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                A premium product with advanced features and priority support.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Badge variant="secondary">Electronics</Badge>
                  <Badge variant="outline">Premium</Badge>
                </div>
                <Badge>In Stock</Badge>
              </div>
            </div>

            {/* Notification Example */}
            <div className="p-4 border rounded-lg bg-card">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Mail className="size-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">New Message</h4>
                    <Badge variant="destructive">3</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    You have new messages in your inbox.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">
                      <Clock className="size-3" />2 min ago
                    </Badge>
                    <Badge variant="outline">High Priority</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theming System Showcase */}
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg font-bold">Theming System</h3>

        {/* Theme Overview */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Theme Architecture</h4>
          <div className="p-4 border rounded-lg bg-card">
            <p className="text-sm text-muted-foreground mb-3">
              The theme system has been migrated from CSS variables to
              TypeScript configuration files. This provides better type safety,
              IntelliSense support, and programmatic theme management.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-2">
                <h5 className="font-medium text-sm">📁 Theme Files</h5>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>
                    • <code>/src/lib/theming.ts</code> - Theme configuration
                  </li>
                  <li>
                    • <code>/src/hooks/use-theme.ts</code> - Theme utilities
                  </li>
                  <li>
                    • <code>/src/components/theme-provider.tsx</code> - Provider
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-sm">🎨 Features</h5>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• TypeScript type safety</li>
                  <li>• Design token management</li>
                  <li>• CSS-in-JS support</li>
                  <li>• Semantic color system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Design Token Palette</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Brand Colors */}
            <div className="p-4 border rounded-lg bg-card">
              <h5 className="font-medium mb-3">Brand Colors</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-primary border"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Primary</div>
                    <div className="text-xs text-muted-foreground">#3f756c</div>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    primary
                  </code>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-secondary border"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Secondary</div>
                    <div className="text-xs text-muted-foreground">#e1c789</div>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    secondary
                  </code>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-accent border"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Accent</div>
                    <div className="text-xs text-muted-foreground">
                      Theme adaptive
                    </div>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    accent
                  </code>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="p-4 border rounded-lg bg-card">
              <h5 className="font-medium mb-3">Semantic Colors</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-green-500 border"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Success</div>
                    <div className="text-xs text-muted-foreground">#06be25</div>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    green
                  </code>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-red-500 border"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Error</div>
                    <div className="text-xs text-muted-foreground">#db0a0a</div>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    destructive
                  </code>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-yellow-500 border"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Warning</div>
                    <div className="text-xs text-muted-foreground">#ffd000</div>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    yellow
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Usage Examples</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Hook Usage */}
            <div className="p-4 border rounded-lg bg-card">
              <h5 className="font-medium mb-3">useTheme Hook</h5>
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded text-xs">
                  <pre className="text-foreground">{`import { useTheme } from '@/hooks/use-theme';

function MyComponent() {
  const theme = useTheme();
  
  // Get colors
  const primaryColor = theme.getColor('primary');
  const accentColor = theme.getColor('accent');
  
  // Get semantic colors
  const successColor = theme.getSemanticColor('success');
  
  // Check theme state
  const isDark = theme.isDark;
  
  return <div style={{ color: primaryColor }}>
    Hello World
  </div>;
}`}</pre>
                </div>
              </div>
            </div>

            {/* CSS-in-JS Usage */}
            <div className="p-4 border rounded-lg bg-card">
              <h5 className="font-medium mb-3">CSS-in-JS Support</h5>
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded text-xs">
                  <pre className="text-foreground">{`const theme = useTheme();

const styles = theme.createStyles({
  container: {
    backgroundColor: 'color(background)',
    color: 'color(foreground)',
    padding: 'spacing(md)',
    borderRadius: 'typography(fontSize, sm)'
  },
  button: {
    backgroundColor: 'semantic(success)',
    padding: 'component(button, padding, lg)'
  }
});`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Tokens */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Design Tokens</h4>
          <div className="grid gap-4 md:grid-cols-3">
            {/* Typography Tokens */}
            <div className="p-4 border rounded-lg bg-card">
              <h5 className="font-medium mb-3">Typography</h5>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs">xs</span>
                  <span className="text-xs text-muted-foreground">12px</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">sm</span>
                  <span className="text-xs text-muted-foreground">14px</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base">base</span>
                  <span className="text-xs text-muted-foreground">16px</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">lg</span>
                  <span className="text-xs text-muted-foreground">18px</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl">xl</span>
                  <span className="text-xs text-muted-foreground">20px</span>
                </div>
              </div>
            </div>

            {/* Spacing Tokens */}
            <div className="p-4 border rounded-lg bg-card">
              <h5 className="font-medium mb-3">Spacing</h5>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">xs</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-primary"></div>
                    <span className="text-xs text-muted-foreground">4px</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">sm</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-4 bg-primary"></div>
                    <span className="text-xs text-muted-foreground">8px</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">md</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary"></div>
                    <span className="text-xs text-muted-foreground">16px</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">lg</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-4 bg-primary"></div>
                    <span className="text-xs text-muted-foreground">24px</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Component Tokens */}
            <div className="p-4 border rounded-lg bg-card">
              <h5 className="font-medium mb-3">Component Tokens</h5>
              <div className="space-y-2">
                <div className="text-sm">Button Heights:</div>
                <div className="space-y-1 pl-2">
                  <div className="flex justify-between text-xs">
                    <span>sm</span>
                    <span className="text-muted-foreground">32px</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>default</span>
                    <span className="text-muted-foreground">40px</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>lg</span>
                    <span className="text-muted-foreground">48px</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Guide */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold">Migration Benefits</h4>
          <div className="p-4 border rounded-lg bg-card">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h5 className="font-medium text-sm text-green-700 dark:text-green-400">
                  ✅ Before (CSS Variables)
                </h5>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Limited type safety</li>
                  <li>• No IntelliSense support</li>
                  <li>• Hard to manage tokens</li>
                  <li>• Manual color calculations</li>
                  <li>• No programmatic access</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="font-medium text-sm text-blue-700 dark:text-blue-400">
                  🚀 After (TypeScript Theming)
                </h5>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Full TypeScript support</li>
                  <li>• IntelliSense for all tokens</li>
                  <li>• Centralized theme management</li>
                  <li>• Semantic color functions</li>
                  <li>• CSS-in-JS integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
