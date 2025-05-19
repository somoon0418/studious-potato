import { StarIcon } from "lucide-react";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/common/components/ui/dialog";

import { DialogContent } from "~/common/components/ui/dialog";
import { Label } from "~/common/components/ui/label";
import { useState } from "react";

export function CreateReviewDialog() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl">
          What do you think of this product?
        </DialogTitle>
      </DialogHeader>
      <Form className="space-y-10">
        <div>
          <Label className="flex flex-col gap-1 items-start">
            Rating{" "}
            <small className="text-muted-foreground">
              What would you rate this product?
            </small>
          </Label>
          <div className="flex gap-2 mt-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className="relative"
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
              >
                <StarIcon
                  className="size-5 text-yellow-400"
                  fill={
                    hoveredStar >= star || rating >= star
                      ? "currentColor"
                      : "none"
                  }
                />
                <input
                  className="opacity-0 h-px w-px absolute inset-0"
                  type="radio"
                  value={star}
                  name="rating"
                  required
                  onChange={() => setRating(star)}
                />
              </label>
            ))}
          </div>
        </div>
        <InputPair
          required
          textArea
          label="Review"
          placeholder="Tell us more about your experience with this product"
          description="Maximum 1000 characters"
        />
        <DialogFooter>
          <Button type="submit">Submit review</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}
