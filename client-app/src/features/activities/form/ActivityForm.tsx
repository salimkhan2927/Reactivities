import React, { useState, FormEvent } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { v4 as uuid } from "uuid";

interface IProps {
  setEditMode: (EditMode: boolean) => void;
  activity: IActivity;
  handleCreateActivity: (activity: IActivity) => void;
  handleEditActivity: (activity: IActivity) => void;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity,
  handleCreateActivity,
  handleEditActivity,
}) => {
  const intializeForm = () => {
    if (activity) {
      return activity;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };
  const [initialFormActivity, setActivity] = useState<IActivity>(intializeForm);
  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...initialFormActivity, [name]: value });
  };
  const handleSubmit = () => {
    if (initialFormActivity.id.length === 0) {
      initialFormActivity.id = uuid();
      handleCreateActivity(initialFormActivity);
    } else {
      handleEditActivity(initialFormActivity);
    }
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name="title"
          placeholder="Title"
          value={initialFormActivity.title}
        />
        <Form.TextArea
          rows={2}
          onChange={handleInputChange}
          name="description"
          placeholder="description"
          value={initialFormActivity.description}
        />
        <Form.Input
          placeholder="Category"
          onChange={handleInputChange}
          name="category"
          value={initialFormActivity.category}
        />
        <Form.Input
          type="date-locale"
          onChange={handleInputChange}
          name="date"
          placeholder="date"
          value={initialFormActivity.date}
        />
        <Form.Input
          onChange={handleInputChange}
          name="city"
          placeholder="City"
          value={initialFormActivity.city}
        />
        <Form.Input
          onChange={handleInputChange}
          name="venue"
          placeholder="Venue"
          value={initialFormActivity.venue}
        />
        <Button floated="right" positive content="submit" type="submit" />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="cancel"
        />
      </Form>
    </Segment>
  );
};
