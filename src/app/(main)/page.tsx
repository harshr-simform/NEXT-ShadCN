import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your dashboard! Try switching between light and dark mode
          using the toggle in the header.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Components
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">158</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+4 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              +22% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Theme Demo</CardTitle>
            <CardDescription>
              Test the theme switching functionality
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Use the theme toggle in the header to switch between light and
              dark modes. The theme will be automatically saved and applied
              across page refreshes.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Notice how the Primary and Secondary button colors remain
              consistent in both light and dark themes.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Color Consistency</CardTitle>
            <CardDescription>
              Primary and secondary colors in both themes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-primary"></div>
                <span className="text-sm">Primary Color</span>
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  #3f756c
                </code>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-secondary"></div>
                <span className="text-sm">Secondary Color</span>
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  #e1c789
                </code>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-accent"></div>
                <span className="text-sm">Accent Color</span>
                <code className="text-xs bg-muted px-2 py-1 rounded">
                  Theme Adaptive
                </code>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              These colors remain the same in both light and dark modes for
              brand consistency.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Header Features</CardTitle>
            <CardDescription>Explore the header functionality</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                Collapsible sidebar toggle
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                Search functionality
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                Notifications with badge
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                Theme switcher (Light/Dark/System)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                User menu dropdown
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Additional content to test sticky header */}
      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Sticky Header Demo</CardTitle>
            <CardDescription>
              Scroll down to see the sticky header in action
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The header is now sticky and will remain at the top when you
              scroll down this page. It includes a backdrop blur effect for
              better readability over content.
            </p>

            {/* Spacer content to enable scrolling */}
            <div className="space-y-4">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Section {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">
                    This is some content to make the page scrollable. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Button variant="outline" size="sm">
                      Action {i + 1}
                    </Button>
                    <Button variant="ghost" size="sm">
                      Secondary
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">
                Sticky Header Benefits
              </h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Always accessible navigation and controls</li>
                <li>• Theme switcher remains available while scrolling</li>
                <li>• Search functionality always visible</li>
                <li>• User menu and notifications always accessible</li>
                <li>• Backdrop blur provides visual separation</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
